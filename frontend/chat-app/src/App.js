import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import {UserProvider} from './UserContext';


function App() {
    return (
      <UserProvider>
        <Router>
          <BaseRouter />
        </Router>
      </UserProvider>
    );
}

export default App;
