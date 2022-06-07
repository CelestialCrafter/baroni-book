import React from 'react';
import styled from 'styled-components';

import { LargeText } from './StyledComponents';

const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Loading = () => <LoadingContainer>
	<LargeText>Loading...</LargeText>
</LoadingContainer>;

export default Loading;