import React from 'react';

const Product = ({ product, addToCart, removeToCart, inTheCart }) => {
	return (
		<div className='product'>
			<div className='product-photo'>
				<img src={product.img} alt='' className='product-img' />
			</div>
			<div className='product-content'>
				<h4 className='product-name'>{product.name}</h4>
				<p className='product-desc'>{product.description}</p>
				<span className='product-price'>{product.price} $</span>
			</div>
			<div className='product-button'>
				{inTheCart(product.id) > 0 ? (
					<div className='remove-btn'>
						<button onClick={() => removeToCart(product)} className='minus-btn'>
							-
						</button>
						<span className='counter'>{inTheCart(product.id)}</span>
						<button onClick={() => addToCart(product)} className='plus-btn'>
							+
						</button>
					</div>
				) : (
					<button onClick={() => addToCart(product)} className='add-btn'>
						Add To Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
