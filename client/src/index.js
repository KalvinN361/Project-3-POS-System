import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { logger } from 'redux-logger'
// import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals'
// import index from './index.css'

// const store = createStore(
// 	reducers,
// 	applyMiddleware(thunk, logger)
// )

ReactDOM.render(
	// <Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	// </Provider>, 
	document.getElementById('root')
);


reportWebVitals()