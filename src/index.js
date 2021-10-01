import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return(
    <h1>This is the second app</h1>
  )
}

// React.Fragment can be removed
ReactDOM.render(
  <React.Fragment>
    <App />
    <AppTwo />,
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
