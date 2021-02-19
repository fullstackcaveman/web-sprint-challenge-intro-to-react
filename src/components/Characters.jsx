import React from 'react';
import Character from './Character';
import { CharactersWrapper } from '../styles/Characters.styles';

const Characters = (props) => {
	const { characters } = props;

	return (
		<CharactersWrapper>
			{characters.map((character) => {
				return <Character key={character.name} {...character} />;
			})}
		</CharactersWrapper>
	);
};

export default Characters;
