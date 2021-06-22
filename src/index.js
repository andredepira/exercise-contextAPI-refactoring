import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider from './context/CarsProvider';
import TrafficProvider from './context/TrafficProvider';

ReactDOM.render(
  <React.StrictMode>
    <CarsProvider>
      <TrafficProvider>
        <App />
      </TrafficProvider>
    </CarsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
