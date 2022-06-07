import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import blue from '../colors/blue.json';

const Wrapper = styled.div`
	display: flex;
	position: sticky;
	width: 100%;
	height: calc(4rem + 20px);
	justify-content: center;
	z-index: 100;
	bottom: 0;
	background-color: ${blue[100]};
`;

const Icon = styled.i`
	color: ${blue[500]};
	margin: 10px 20px;
	font-size: 4rem;
`;

const Navbar = () => <Wrapper>
	<Link to="/">
		<Icon className="material-icons flow-text">home</Icon>
	</Link>
	<Link to="/friends">
		<Icon className="material-icons flow-text">group_remove</Icon>
	</Link>
	<Link to="/profile">
		<Icon className="material-icons flow-text">person</Icon>
	</Link>
</Wrapper>;

export default Navbar;