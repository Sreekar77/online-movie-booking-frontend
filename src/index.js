import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/reducers/ConfigureStore';

 
const StoreInstance = configureStore();
 
ReactDOM.render(
  <React.StrictMode>
  <Provider store={StoreInstance}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();