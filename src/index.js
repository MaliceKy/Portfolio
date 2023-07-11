import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// global imports
import './assests/styles/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a separate component for the background
function Background() {
  return (
    <div className="background">
      <Content />
    </div>
  );
}

// Create a separate component for the content
function Content() {
  return (
    <div className="content">
      <App />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Background />
  </React.StrictMode>
);

reportWebVitals();

