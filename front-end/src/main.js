import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './component/app/app';
import reducer from './reducer';
import thunk from './lib/redux-thunk';
import reporter from './lib/redux-reporter';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reporter)));

const container = document.createElement('div');
document.body.appendChild(container);
render(<Provider store={store}><App/></Provider>, container);
