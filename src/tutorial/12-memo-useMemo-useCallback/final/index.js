import React, { useState, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders


//Remember that the function passed to useMemo runs during rendering. Don’t do anything there 
//that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  //useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart]) //will render only if there's a change to 'cart'


  // useMemo will only recompute the memoized value when one of the dependencies has changed. 
  //This optimization helps to avoid expensive calculations on every render.
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [ 
    products,
  ])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}
// If your component renders the same result given the same props, you can wrap it in a call to React.memo 
// for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, 
// and reuse the last rendered result.
const BigList = React.memo(({ products, addToCart }) => { 
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  // useEffect(() => {
  //   console.count('hello from product');
  // });
  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
