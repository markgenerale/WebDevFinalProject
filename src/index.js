// Import the required libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the main App component and inject it into the 'root' element in the HTML
ReactDOM.render(
  // Wrap the App component with React.StrictMode for additional checks and warnings during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Get the 'root' element from the HTML document and inject the App component into it
  document.getElementById('root')
);
