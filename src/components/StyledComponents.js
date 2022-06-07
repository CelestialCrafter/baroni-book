import styled from 'styled-components';
import blue from '../colors/blue.json';

export const Text = styled.span`
	font-family: 'Inter';
	font-weight: 300;
	font-size: 1rem;
`;

export const LargeText = styled(Text)`
	font-weight: 700;
	font-size: 2.5rem;
`;

export const TextItalic = styled(Text)`
	font-style: italic;
`;

export const LargeTextItalic = styled(LargeText)`
	font-style: italic;
`;

export const Button = styled.button`
	background-color: ${blue[200]};
	border: none;
	width: 30%;
	height: 2.5rem;
	margin: 0.5rem;
	border-radius: 15px;
`;

export const Overlay = styled.div`
	height: 0;
	overflow: visible;
	pointer-events: none;
	background: none !important;
`;