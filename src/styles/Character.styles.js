import styled from 'styled-components';

export const CharacterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	width: 500px;
	padding: 5px 10px;
	border: 1px solid #4f1605;
	margin-bottom: 5px;
	background: linear-gradient(
		to bottom,
		rgba(246, 230, 180, 1) 0%,
		rgba(234, 129, 0, 1) 100%
	);
	color: #4f1605;
	letter-spacing: 0.12rem;
`;

export const H2 = styled.h2`
	margin: 0;
`;

export const Button = styled.button`
	padding: 2px 8px;
	background-color: #4f1605;
	color: white;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;
