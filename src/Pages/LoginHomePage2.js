import React from 'react';
import Home from '../components/Home';
import MenuBar from '../components/MenuBar';

function LoginHomePage2(props) {
	// Render the Home and MenuBar components within a container
	return (
		<div>
			{/* Pass cards prop to the Home component */}
			<Home cards={props.cards} />
			{/* Render the MenuBar component */}
			<MenuBar />
		</div>
	);
}

export default LoginHomePage2;