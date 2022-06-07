import React, { useState } from 'react';
import styled from 'styled-components';

import blue from '../colors/blue.json';
import red from '../colors/red.json';
import { Text, TextItalic, LargeText, Button, Overlay } from './StyledComponents';

const Wrapper = styled.div`
	width: 100%;
	max-width: 544px;
	background-color: ${blue[100]};
	padding: 0.5rem;
	margin: 0 auto;
`;

const Jumpscare = styled.video`
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
`;

const jumpscareIds = [
	'00000000-0000-0000-0000-000000000001',
	'00000000-0000-0000-0000-000000000002'
];

const Friend = ({ user, isFriend }) => {
	const [jumpscare, setJumpscare] = useState(false);
	const denyRequest = () => {
		if (jumpscareIds.includes(user.id)) {
			setJumpscare(true);
			setTimeout(() => setJumpscare(false), 1500);
		}
	};

	return (
		<React.Fragment>
			{jumpscare ? <Overlay><Jumpscare autoPlay src="jumpscare.webm" /></Overlay> : null}
			<Wrapper className="row">
				<img alt="Profile" className="col s3 responsive-img circle" src={user.pfp} />
				<LargeText className="col s9">{user.username}</LargeText>
				{isFriend ?
					<div>
						<Button className="col s4"><TextItalic>Send Message</TextItalic></Button>
						<Button className="col s4" style={{ backgroundColor: red[200] }}><TextItalic>Remove Friend</TextItalic></Button>
					</div> :
					<React.Fragment>
						<Text className="col s9">Wants to be your friend</Text>
						<div>
							<Button className="col s4"><TextItalic>Accept</TextItalic></Button>
							<Button className="col s4" onClick={() => denyRequest()} ><TextItalic>Deny</TextItalic></Button>
						</div>
					</React.Fragment>
				}
			</Wrapper>
		</React.Fragment>
	);
};

export default Friend;