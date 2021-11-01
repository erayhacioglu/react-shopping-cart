import { useState } from 'react';

import Header from './components/Header';
import Product from './components/Product';
import Summary from './components/Summary';
import data from './data.js';

const App = () => {
	const [cartItems, setCartItems] = useState([]);
	const cartLength = cartItems.reduce((a, c) => a + c.qty, 0);

	const addToCart = (product) => {
		const existProduct = cartItems.find((item) => item.id === product.id);
		if (existProduct) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...existProduct, qty: existProduct.qty + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};

	const removeToCart = (product) => {
		const existProduct = cartItems.find((item) => item.id === product.id);
		if (existProduct.qty === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...existProduct, qty: existProduct.qty - 1 }
						: item
				)
			);
		}
	};

	const deleteItem = (product) => {
		setCartItems(cartItems.filter((item) => item.id !== product.id));
	};

	const inTheCart = (id) => {
		const exist = cartItems.find((item) => item.id === id);
		if (exist) {
			return exist.qty;
		}
	};

	return (
		<>
			<Header cartLength={cartLength} />
			<div className='container'>
				<div className='row'>
					<div className='col-2'>
						<div className='product-list'>
							{data.map((product) => (
								<Product
									key={product.id}
									product={product}
									addToCart={addToCart}
									removeToCart={removeToCart}
									inTheCart={inTheCart}
								/>
							))}
						</div>
					</div>
					<div className='col-1'>
						<Summary
							cartItems={cartItems}
							addToCart={addToCart}
							removeToCart={removeToCart}
							deleteItem={deleteItem}
							cartLength={cartLength}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
