import Home from '../components/Home';
import Login from '../components/Login';
import '../components/Home.css';
import '../components/Login.css';

function LoginHomePage({ cards }) {
	// Render the Home and Login components side by side in a container
	return (
		<div className="app-container">
			{/* Pass cards prop to the Home component */}
			<Home cards={cards} />
			{/* Render the Login component */}
			<Login />
		</div>
	);
}

export default LoginHomePage;