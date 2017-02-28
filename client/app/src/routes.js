import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import dataSetsView from './components/dataSets_view';
import Login from './components/login';

//Shows initial website, example -> 
//www.google.com/ => renders component App
		//If the route is '/' show App and show PostsIndex
export default (
	<Route path="/" component={App}>
		<IndexRoute component={dataSetsView} />
		<Route path="login" component={Login} />
	</Route>
);
