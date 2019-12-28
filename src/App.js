import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
// Routes
import Routes from './routes';
// Styles
import GlobalStyles from './styles/global';
// Components
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
