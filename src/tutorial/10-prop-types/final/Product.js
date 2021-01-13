import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  const url = image && image.url; //if image is there then only display the image url
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = { // .propTypes is the function on Product(function)
  image: PropTypes.object.isRequired, //will throw an error if anyone of the isRequired feild is not recieved in the props
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Default props
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
