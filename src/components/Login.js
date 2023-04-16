
import React, { useState } from 'react';
import './Login.css';
import MenuBar from './MenuBar';

function Login() {
	// Initialize state variables for email, password, sign-up UI visibility, and logged-in status
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signUpEmail, setSignUpEmail] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signUpVisible, setSignUpVisible] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// Function to validate email format
	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	// Function to handle login functionality
	const handleLogin = () => {
		if (validateEmail(email) && password.trim() !== '') {
			setEmail('');
			setPassword('');
			setIsLoggedIn(true);
		} else {
			alert('Please enter a valid email and password.');
		}
	};

	// Function to show the sign-up form
	const handleSignUpClick = () => {
		setSignUpVisible(true);
	};

	// Function to handle sign-up functionality
	const handleSignUp = () => {
		if (validateEmail(signUpEmail) && signUpPassword.trim() !== '') {
			setSignUpEmail('');
			setSignUpPassword('');
			setSignUpVisible(false);
		} else {
			alert('Please enter a valid email and password.');
		}
	};

	return (
		<div className="login-container">
			{/* Conditionally render either the login form or the MenuBar */}
			{!isLoggedIn ? (
				<>
					{/* Login form */}
					<img
						className="spotify-logo"
						src="https://st.depositphotos.com/37050820/58882/v/450/depositphotos_588825950-stock-illustration-spotify-logo-dark-mode.jpg"
						alt="Spotify Logo"
					/>
					<h2>Music for everyone</h2>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={handleLogin}>Log in</button>
					<p>Don't have an account?</p>
					<button className="signup-button" onClick={handleSignUpClick}>
						Sign up
					</button>
					{/* Sign-up form */}
					{signUpVisible && (
						<div className="signup-form">
							<p>Fill in the fields below</p>
							<input
								type="email"
								placeholder="Email"
								value={signUpEmail}
								onChange={(e) => setSignUpEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="Password"
								value={signUpPassword}
								onChange={(e) => setSignUpPassword(e.target.value)}
							/>
							<button className="finish-signup-button" onClick={handleSignUp}>
								Finish sign up
							</button>
						</div>
					)}
				</>
			) : (
				<>
					{/* Render MenuBar when user is logged in */}
					<MenuBar />
				</>
			)}
		</div>
	);
}

export default Login;






