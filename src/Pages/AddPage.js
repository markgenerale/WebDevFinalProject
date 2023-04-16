import Home from '../components/Home';
import { Link } from 'react-router-dom';
import './PagesCSS/AddPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPage(props) {
	// Initialize state variables for album, artist, album cover, date, array, and array length
	const [album, setAlbum] = useState('');
	const [artist, setArtist] = useState('');
	const [acover, setAcover] = useState('');
	const [date, setDate] = useState('');
	const [array, setArray] = useState(props.array);
	const [alength, setAlength] = useState(props.array.length);

	// Hook to navigate programmatically with react-router
	let navigate = useNavigate();

	// Function to handle route change when clicking the Back button
	const routeChange = () => {
		let path = `/loggedin`;
		navigate(path);
	};

	const handleAdd = () => {
		// Create a new array and push the new album data into it
		const newArray = [...props.array];
	  
		{/* Find the maximum ID in the current array, to ensure unique IDs for new elements */}
		const maxId = props.array.reduce((max, current) => (current.id > max ? current.id : max), 0);
	  
		{/* Push the new album data with a unique ID, which is maxId + 1 */}
		newArray.push({
		  id: maxId + 1,
		  albumCover: acover,
		  albumName: album,
		  creator: artist,
		  releaseDate: date,
		});
	  
		// Update the array in the parent component and navigate to the main page
		props.updateArray(newArray);
		navigate('/loggedin');
	  };
	  
	  

	return (
		<div className="add-page-wrapper">
			{/* Render the Add Album label */}
			<div className="add-page-main-label">
				<h1> Add Album </h1>
			</div>
			{/* Render the form to add a new album */}
			<div className="add-page-form">
				<form onSubmit={handleAdd}>
					<label className="albumtitle">Album Title:</label> <br />
					{/* Input field for album title */}
					<input
						type="text"
						placeholder="Album title"
						value={album}
						onChange={(e) => setAlbum(e.target.value)}
					/>
					<label>Artist Name:</label> <br />
					{/* Input field for artist name */}
					<input
						type="text"
						placeholder="Enter artist name here"
						value={artist}
						onChange={(e) => setArtist(e.target.value)}
					/>
					<label>Link to Album Cover:</label> <br />
					{/* Input field for album cover */}
					<input
						type="text"
						placeholder="Enter album cover link here"
						value={acover}
						onChange={(e) => setAcover(e.target.value)}
					/>
					<label>Release date:</label> <br />
					{/* Input field for release date */}
					<input
						type="text"
						placeholder="Enter release date here"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
					{/* Render the Back and Submit buttons */}
					<div className="buttonbar">
						<button onClick={routeChange} value={'back'}>
							Back
						</button>
						<button onClick={handleAdd}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddPage;