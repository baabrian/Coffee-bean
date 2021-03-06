import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import { CookiesProvider } from 'react-cookie';
import reduxThunk from 'redux-thunk';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import App from '../src/App';

import reducers from '../src/reducers';

// Redux DevTools to monitor states
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

ReactDOM.hydrate(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <CssBaseline />
          <App />
        </CookiesProvider>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('react-root'),
);
