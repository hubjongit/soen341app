import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Switch>
                        <Route path="/feed"/>
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
