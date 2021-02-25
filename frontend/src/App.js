import React from 'react';
import './App.css';
import Register from "./components/Register"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="app">
          <div className="container">
            <Switch>
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
