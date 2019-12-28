import React from 'react';

import { BrowserRouter } from 'react-router-dom';
// Styles
import GlobalStyles from './styles/global';
// Routes
import Routes from './routes';
// Components
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
