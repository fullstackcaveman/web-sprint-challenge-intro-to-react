// Write your Character component here
import React from 'react';
import { CharacterWrapper, H2, Button } from '../styles/Character.styles.js';

const Character = (props) => {
	const { name, birth_year } = props;

	return (
		<CharacterWrapper>
			<H2 className='name'>{name}</H2>
			<Button>Info</Button>
			{/* <h3 className='birth'>Birth Year: {birth_year}</h3> */}
			{/* <p>Height: {height}</p>
			<p>Hair Color: {haircolor}</p>
			<p>Eye Color: {eyecolor}</p>
			<p>Gender: {gender}</p> */}
		</CharacterWrapper>
	);
};

export default Character;
