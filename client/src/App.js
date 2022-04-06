import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Register_form from './pages/Register/Register_form';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';

const App = () => {
  return (
   <Router>

    <main>
      <Switch>
      <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/register" exact>
          <Register_form/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/booking" exact>
          <Booking/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
