import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </p>
            <img src={image} />
            <button>Add to basket</button>
        </div>
    )
}

export default Product;
