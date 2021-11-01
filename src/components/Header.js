import React from 'react';

const Header = ({ cartLength }) => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='navbar'>
					<h2 className='logo'>Shopping Cart</h2>
					<div className='cart'>
						Cart
						<span className='cart-number'>{cartLength}</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
