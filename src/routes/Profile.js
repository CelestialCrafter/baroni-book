import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const { getAccessTokenSilently, sub } = useAuth0();
	const [user, setUser] = useState();
	const { name, picture, last_login: lastLogin, userMetadata: { description, pronouns, wallPosts, wallWriting } } = user || {
		name: '',
		picture: '',
		last_login: 0,
		userMetadata: {
			description: '',
			pronouns: 'unset',
			wallPosts: [],
			wallWriting: ''
		}
	};

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently({ audience: 'https://dev-0zsiv-0e.us.auth0.com/api/v2/' });
			const response = await fetch(`https://dev-0zsiv-0e.us.auth0.com/api/v2/users/${sub}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setUser(await response.json());
		})();
	}, [sub, getAccessTokenSilently]);

	return <React.Fragment>{name} {picture} {description} {pronouns} {wallPosts} {wallWriting} {lastLogin}</React.Fragment>;
};

export default Profile;