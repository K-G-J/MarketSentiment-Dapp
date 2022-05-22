import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.REACT_APP_APPID} serverUrl={process.env.REACT_APP_SERVER_URL}>
          <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
