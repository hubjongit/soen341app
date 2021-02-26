import React from 'react';
import './App.css';
import RegisterForm from "./components/RegisterForm"
import PostForm from './components/PostForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Switch>
                        <Route path="/post" component={PostForm} />
                        <Route path="/register" component={RegisterForm} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
