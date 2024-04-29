import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
