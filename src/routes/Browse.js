import React from 'react';
import Post from '../components/Post';
import styled from 'styled-components';

const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Browse = () => <PostContainer>
	{Array(10).fill(0).map(() => <Post
		user={{ pfp: 'https://via.placeholder.com/128/ff0000', username: 'cel' }}
		timestamp={Date.now()}
		feeling="sad"
		text="ablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablalalablablablablablablablablablablablablablablablablablablablablablablablablablablablablablab"
		images={['yelan.png', 'yelan.png']}
		liked={false}
	/>)}
</PostContainer>;

export default Browse;