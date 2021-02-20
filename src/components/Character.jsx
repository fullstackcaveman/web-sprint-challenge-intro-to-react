// Write your Character component here
import React from 'react';
import { CharacterWrapper, H2, Button } from '../styles/Character.styles.js';

const Character = (props) => {
	const { name, birth_year, height, hair_color, eye_color, gender } = props;

	const clickHandler = () => {
		const charWrapper = document.getElementById(`${name}`);
		const hide = document.getElementById(`${name}${birth_year}`);
		charWrapper.classList.toggle('expand');
		hide.classList.toggle('hidden');
	};

	return (
		<CharacterWrapper id={name}>
			<div className='container'>
				<H2 className='name'>{name}</H2>
				<Button onClick={clickHandler}>Character Info</Button>
			</div>
			<div id={name + birth_year} className='flex hidden'>
				<div className='row'>
					<img
						className='image'
						src={require('../images/placeholder.jpg')}
						alt={name}
					/>
					<div className='info'>
						<p className='birth'>Birth Year: {birth_year}</p>
						<p>Height: {height}</p>
						<p>Hair Color: {hair_color}</p>
						<p>Eye Color: {eye_color}</p>
						<p>Gender: {gender}</p>
					</div>
				</div>
			</div>
		</CharacterWrapper>
	);
};

export default Character;
