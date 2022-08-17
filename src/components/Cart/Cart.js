import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

const Cart = () => {
  const prods = useSelector((state) => state.cart);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Cart</h1>
      <div>
        {
          prods.map((prod,index) => (
            <Product key={index} title={prod.title} rating={prod.rating.rate} ratingCount={prod.rating.count} category={prod.category} description={prod.description} image={prod.image} price={prod.price} product={prod.id} btnText="Remove" funct="remove" />
          ))
        }
      </div>
    </>
  )
}

export default Cart