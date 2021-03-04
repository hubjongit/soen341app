import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import PostForm from "./components/PostForm"
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
                        <Route path="/post" component={PostForm} />
                        <Route path="/follow" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
