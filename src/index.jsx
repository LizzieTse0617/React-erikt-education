import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import React from 'react';

import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>
);
