import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

import setAuthToken from './services/setAuthToken';

if (localStorage.token && localStorage.token !== undefined) {
  if (localStorage.authenticateUserId !== undefined) {
    setAuthToken(localStorage.token);
  };    
};

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
}

export default App;
