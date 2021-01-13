import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {//always use use keyword in the function name(eg. useFetch), url is the prop being passed
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }); 
  
  useEffect(() => {
    getProducts();
  }, [url]); //function will be called when url is changed

  return { loading, products };
};
