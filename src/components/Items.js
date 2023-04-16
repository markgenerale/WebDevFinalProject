import React from 'react';
import './Items.css';

function Item({ albumCover, albumName, creator, releaseDate }) {
	return (
		<div className="album-card">
			{/* Create the album cover container */}
			<div className="album-cover">
				{/* Display the album cover image */}
				<img src={albumCover} alt={albumName} />
			</div>
			{/* Create the album information container */}
			<div className="album-info">
				{/* Display the album name */}
				<h3>{albumName}</h3>
				{/* Display the album creator */}
				<p>By {creator}</p>
				{/* Display the album release date */}
				<p>Released on {releaseDate}</p>
			</div>
		</div>
	);
}

export default Item;