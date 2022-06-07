import React from 'react';
import styled from 'styled-components';
import blue from '../colors/blue.json';
import { Text, TextItalic } from './StyledComponents';

const Wrapper = styled.div`
	background-color: ${blue[100]};
	border-radius: 20px;
	border: 1px solid black;
	max-width: 544px;
	width: calc(100% - 20px);
	margin-top: 0.4rem;
	margin-bottom: 0.4rem;
`;

const Pfp = styled.img`
	margin: 10px;
	margin-right: 0 !important;
`;

const Seperator = styled.hr`
	width: 100%;
	margin-bottom: 10px;
`;

const ActionWrapper = styled.div`
	height: 5rem;
	position: relative;
	display: flex;
	flex: 1;
	justify-content: center;
`;

const BottomWrapper = styled.div`
	width: 100%;
	margin-bottom: 8px;
	bottom: 0;
`;

const PostImagesWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
  margin: 10px 0;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
	border-radius: 5px;
  object-fit: cover;
	object-fit: cover;
	object-position: center top;
`;

const PostImageWrapper = styled.div`
	position: relative;
	margin: 0 5px;
	width: 45%;
	&:before {
		content: '';
		float: left;
		padding-top: 100%;
	}
`;

const Post = ({ images, user, timestamp, feeling, text, liked }) => <Wrapper className="z-depth-2">
	<div className="row" style={{ marginBottom: 5 }}>
		<Pfp className="col s3 responsive-img circle" src={user.pfp} alt="Profile" />
		<TextItalic className="col s7 flow-text" style={{ fontWeight: 500, marginTop: '10px' }}>{user.username}</TextItalic>
		<TextItalic className="col s7 flow-text">{Date(timestamp).toLocaleString('en-us', { dateStyle: 'short', timeStyle: 'short' })}</TextItalic>
		<TextItalic className="col s7 flow-text" style={{ marginBottom: 10 }}>feeling {feeling}</TextItalic>
		<div style={{ margin: 10 }}><Text className="flow-text" style={{ wordWrap: 'break-word' }}>{text}</Text></div>
	</div>
	<PostImagesWrapper>
		{images.map(image => <PostImageWrapper>
			<PostImage
				alt=""
				src={image}
				key={image}
			/>
		</PostImageWrapper>
		)}
	</PostImagesWrapper>
	<BottomWrapper>
		<Seperator className="col s12" />
		<ActionWrapper className="col s6 offset-s3">
			<img
				alt="Cookie"
				style={{ height: '100%', width: 'auto', marginRight: 20, filter: `grayscale(${Number(liked)})` }}
				src="cookie.png"
			/>
			<i
				className="flow-text material-icons"
				style={{ fontSize: '5rem', height: '100%', width: 'auto', color: liked ? '#000000' : blue[500], marginLeft: 20 }}
			>comment</i>
		</ActionWrapper>
	</BottomWrapper>
</Wrapper>;

export default Post;