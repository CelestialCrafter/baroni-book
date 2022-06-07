import React from 'react';
import styled from 'styled-components';

import red from '../colors/red.json';
import { LargeText } from './StyledComponents';

const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Error = ({ error }) => <ErrorContainer>
	<LargeText>Error! {error}</LargeText>
</ErrorContainer>;

export default Error;