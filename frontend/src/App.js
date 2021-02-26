import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import Feed from "./components/Feed"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Switch>
                        <Route path="/feed" component={Feed} />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        {/*<Route path="/follow" component={LoginForm} />*/}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
