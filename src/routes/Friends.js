import React from 'react';
import styled from 'styled-components';

import { LargeText } from '../components/StyledComponents';
import Friend from '../components/Friend';

const FriendsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Friends = () => <FriendsContainer>
	<LargeText>Friend Requests</LargeText>
	{Array(10).fill(0).map(() => <Friend
		user={{ pfp: 'https://via.placeholder.com/128/ff0000', username: 'cel', id: '00000000-0000-0000-0000-000000000001' }}
		isFriend={false}
	/>)}
	<LargeText>Friends</LargeText>
	{Array(10).fill(0).map(() => <Friend
		user={{ pfp: 'https://via.placeholder.com/128/ff0000', username: 'cel', id: '00000000-0000-0000-0000-000000000001' }}
		isFriend={true}
	/>)}
</FriendsContainer>;

export default Friends;