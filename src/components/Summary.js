const Summary = ({
	cartItems,
	addToCart,
	removeToCart,
	deleteItem,
	cartLength,
}) => {
	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const taxPrice = itemsPrice * 0.18;
	const shippingPrice = itemsPrice > 250 ? 0 : 50;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;

	const handleCheckout = () => {
		alert(
			JSON.stringify({
				cart: cartItems,
			})
		);
	};

	return (
		<div className='cart-summary'>
			<div className='summary-header'>
				<h3>Cart({cartLength})</h3>
			</div>
			{cartItems.length > 0 ? (
				<>
					<hr />
					<div className='summary-items'>
						{cartItems.length > 0 &&
							cartItems.map((item) => (
								<div className='summary-item' key={item.id}>
									<img src={item.img} alt='' className='summary-item-img' />
									<div className='summary-item-content'>
										<h5>{item.name}</h5>
										<div className='summary-item-btn'>
											<button
												onClick={() => removeToCart(item)}
												className='summary-minus'
												disabled={item.qty === 1 ? true : false}
												style={{ opacity: `${item.qty === 1 ? 0.4 : 1}` }}
											>
												-
											</button>
											<span className='summary-counter'>{item.qty}</span>
											<button
												onClick={() => addToCart(item)}
												className='summary-plus'
											>
												+
											</button>
										</div>
										<span>
											{item.qty} x {item.price}$
										</span>
										<button
											onClick={() => deleteItem(item)}
											className='summary-item-delete'
										>
											X
										</button>
									</div>
								</div>
							))}
					</div>
					<hr />
					<div className='summary-total'>
						<div className='summary-total-item'>
							<h4>Items Price</h4>
							<span className='summary-total-item-price'>${itemsPrice}</span>
						</div>
						<div className='summary-total-item'>
							<h4>Tax Price</h4>
							<span className='summary-total-item-price'>${taxPrice}</span>
						</div>
						<div className='summary-total-item'>
							<h4>Shipping Price</h4>
							<span className='summary-total-item-price'>${shippingPrice}</span>
						</div>
						<div className='summary-total-item'>
							<h2>Total Price</h2>
							<span className='summary-total-item-price'>${totalPrice}</span>
						</div>
					</div>
					<hr />
					<button onClick={handleCheckout} className='summary-checkout-btn'>
						Checkout
					</button>
				</>
			) : (
				<p>Cart is empty</p>
			)}
		</div>
	);
};

export default Summary;
