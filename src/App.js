import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SWAPI_BASE_URL } from './constants';
import './App.css';
import Characters from './components/Characters';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState(1);
	const url = `${SWAPI_BASE_URL}/?page=${page}`;

	useEffect(() => {
		const characterList = () => {
			axios
				.get(url)
				.then((res) => {
					setCharacters(res.data);
					console.log(`${SWAPI_BASE_URL}/?page=${page}`, url);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		characterList();
	}, [url, page]);

	const setNextPage = () => {
		setPage(page + 1);
	};

	const setPrevPage = () => {
		setPage(page - 1);
	};

	return (
		<div className='App'>
			<h1 className='Header'>Star Wars Characters</h1>
			<Characters
				characters={characters}
				page={page}
				nextpage={setNextPage}
				prevpage={setPrevPage}
			/>
		</div>
	);
};

export default App;
