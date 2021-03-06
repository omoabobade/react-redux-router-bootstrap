import "babel-polyfill";
import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';
let store = createStore(reducers);
ReactDOM.render(
 <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
   </Provider>,
  document.getElementById('app')
);