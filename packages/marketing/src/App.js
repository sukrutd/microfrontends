import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({ productionPrefix: 'ma' });

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<StylesProvider generateClassName={generateClassName}>
					<Route exact path='/pricing' component={Pricing} />
					<Route path='/' component={Landing} />
				</StylesProvider>
			</Switch>
		</BrowserRouter>
	);
};
