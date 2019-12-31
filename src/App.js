import React from 'react';
import { Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import store from './store';
// Routes
import Routes from './routes';
import history from './services/history';
// Styles
import GlobalStyles from './styles/global';
// Components
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
