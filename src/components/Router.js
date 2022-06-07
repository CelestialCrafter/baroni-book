import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';

import Navbar from './Navbar';
import Browse from '../routes/Browse';
import Friends from '../routes/Friends';
import Profile from '../routes/Profile';
const ProtectedRoute = ({ component, ...args }) => {
	const Component = withAuthenticationRequired(component, args);
	return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
	const navigate = useNavigate();
	const onRedirectCallback = appState => navigate((appState && appState.returnTo) || window.location.pathname);

	return <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
		{children}
	</Auth0Provider>;
};

const Router = () => {
	return (
		<Auth0ProviderWithRedirectCallback
			domain="dev-0zsiv-0e.us.auth0.com"
			clientId="cUiZFm893lWImoM0Bd07Ud5Wgu439fWc"
			redirectUri={window.location.origin}
		>
			<Routes>
				<Route path="/" element={<Browse />} />
				<Route path="/friends" element={<ProtectedRoute component={Friends} />} />
				<Route path="/profile" element={<ProtectedRoute component={Profile} />} />
			</Routes>
			<Navbar />
		</Auth0ProviderWithRedirectCallback>
	);
};

export default Router;
