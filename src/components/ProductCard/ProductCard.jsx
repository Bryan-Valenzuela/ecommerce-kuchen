import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router';

export const ProductCard = ({ 
  id,
  image, 
  name, 
  price, 
  rating, 
  isOnSale = false, 
  discount = 0 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const discountedPrice = isOnSale
    ? (price - price * (discount / 100)).toFixed(2)
    : null;

  return (
    <div className="product-card" onClick={handleClick}>
      {isOnSale && <span className="product-card__badge">SALE</span>}

      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>

        <div className="product-card__price">
          {isOnSale ? (
            <>
              <span className="product-card__discount">-{discount}%</span>
              <span className="product-card__discounted">${discountedPrice}</span>
              <span className="product-card__old-price">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="product-card__normal-price">${price.toFixed(2)}</span>
          )}
        </div>

        <div className="product-card__rating">
          {'★'.repeat(Math.round(rating))}
          {'☆'.repeat(5 - Math.round(rating))}
        </div>
      </div>
    </div>
  );
};
