import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginHomePage from './Pages/LoginHomePage';
import AddPage from './Pages/AddPage';
import DeletePage from './Pages/DeletePage';
import LoginHomePage2 from './Pages/LoginHomePage2';
import EditPage from './Pages/EditPage';
import { useState, useEffect } from 'react';

// Main App component
function App() {
	// State containing the array of album cards
	const [cards, setCards] = useState([
		{
			id: 1,
			albumCover:
				'https://upload.wikimedia.org/wikipedia/en/d/de/21_Savage%2C_Offset_%26_Metro_Boomin_-_Without_Warning.png',
			albumName: 'Without Warning',
			creator: 'Metro Boomin',
			releaseDate: '10/31/2017',
		},
		{
			id: 2,
			albumCover:
				'https://upload.wikimedia.org/wikipedia/en/2/28/Metro_Boomin_%E2%80%93_Not_All_Heroes_Wear_Capes.png',
			albumName: 'Not all Heroes Wear Capes',
			creator: 'Metro Boomin',
			releaseDate: '11/02/2018',
		},
		{
			id: 3,
			albumCover:
				'https://upload.wikimedia.org/wikipedia/en/7/7e/I_Never_Liked_You_%28Future%29.png',
			albumName: 'I Never Liked You',
			creator: 'Future',
			releaseDate: '4/29/2022',
		},
		{
			id: 4,
			albumCover:
				'https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg',
			albumName: 'Die Lit',
			creator: 'Playboi Carti',
			releaseDate: '5/11/2018',
		},
	]);
	
	// server routes 
	const users = require('./routes/api/users');

	App.use('/api/users', users);


	// Function to update the album array
	const updateAlbumArray = (newArray) => {
		setCards(newArray);
	};

	const [originalCards, setOriginalCards] = useState(cards);

	useEffect(() => {
		if (window.location.pathname === '/loggedout') {
		  setCards(originalCards);
		}
	  }, [originalCards]);

	return (
		<div className="App">
			{/* Setting up React Router to handle different routes */}
			<Router>
				<Routes>
					{/* Route for the initial Login/Home page */}
					<Route exact path="/" element={<LoginHomePage cards={cards} />} />

					{/* Route for the main logged-in page */}
					<Route path="/loggedin" element={<LoginHomePage2 cards={cards} />} />

					{/* Route for the Add Album page */}
					<Route
						path="/add"
						element={<AddPage array={cards} updateArray={updateAlbumArray} />}
					/>

					{/* Route for the Edit Album page */}
					<Route path="/edit" element={<EditPage array={cards} updateArray={updateAlbumArray}/>} />

					{/* Route for the Delete Album page */}
					<Route path="/del" element={<DeletePage array={cards} updateArray={updateAlbumArray}/>} />

					{/* Route for when logged-out page */}
					<Route path="/loggedout" element={<LoginHomePage cards={originalCards} />} />


					{/* TODO: Add route for handling errors */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;