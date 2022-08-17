import React from 'react';
import Button from '@mui/material/Button';
import "./Product.css";
import StarRateIcon from '@mui/icons-material/StarRate';


import { add,remove } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';


const Product = (props) => {
  const { title, image, category, description, price, rating, ratingCount, product, btnText,funct } = props;

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  const handleRemove= (product) => {
    dispatch(remove(product));
  }
  return (
    <div className='prod-wrapper'>

      <div className='prod-img-div'>
        <img className='prod-img' src={image} alt="" />
      </div>

      <div className="prod-details">
        <span className='prod prod-title'> {title}</span>
        <div className='prod-rating-div'>
          <span className='prod-rating'>
            <strong>{rating}</strong>
            <StarRateIcon fontSize="small" />
          </span>
          <span className='prod-rating-count'>{ratingCount} Ratings </span>
        </div>

        <span className='prod prod-category'> <small><strong>{category}</strong></small></span>
        <span className='prod prod-desc'> {description}</span>
        <span className='prod prod-price'> $ {price}</span>
        <Button className='prod prod-btn' variant="outlined" onClick={funct==='add'?() => handleAdd(product):() => handleRemove(product)}>{btnText}</Button>
      </div>
    </div>
  )
}

export default Product

