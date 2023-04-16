import React from 'react';
import './Home.css';
import Item from './Items';

function Home(props) {
	return (
		<div className="home">
			{/* Display the catalog title in a heading */}
			<h1 className="catalog-title">Album Catalog</h1>
			{/* Create a grid layout for the album cards */}
			<div className="album-list">
				{/* Iterate through the cards array and create a new Item component for each card */}
				{props.cards &&
					props.cards.map((card) => (
						<Item
							key={card.id}
							albumCover={card.albumCover}
							albumName={card.albumName}
							creator={card.creator}
							releaseDate={card.releaseDate}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;