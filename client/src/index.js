// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'
// import reducers from './reducers';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker'

// const store = createStore(
// 	reducers,
// 	applyMiddleware(thunk, logger)
// )

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Router>
// 			<App />
// 		</Router>
// 	</Provider>, 
// 	document.getElementById('root')
// );


// serviceWorker.register();

//Ron's stuff YO KALVIN - You need any of the stuff above?
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavTabs from './NavTabs';
import Topbar from './Topbar';
import Cards from './Cards';

ReactDOM.render(
<><Topbar/><NavTabs/><Cards/></>,document.getElementById('root')
);
