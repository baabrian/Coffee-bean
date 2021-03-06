import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes />
  </Router>
);

export default App;
