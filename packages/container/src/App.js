import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({ productionPrefix: 'co' });

export default () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header />
				<Suspense fallback={<ProgressIndicator />}>
					<Switch>
						<Route path='/auth' component={AuthApp} />
						<Route path='/' component={MarketingApp} />
					</Switch>
				</Suspense>
			</BrowserRouter>{' '}
		</StylesProvider>
	);
};
