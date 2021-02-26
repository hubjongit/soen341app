import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FollowableUser from "./components/FollowableUser";


/*
function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <div className="container">

                        <Route path="/feed"/>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                    </div>
                       <Route path="/follow" component={FollowableUser} />
                </Switch>
            </div>
        </Router>
    );
}
*/

/*
function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Switch>
                        <Route path="/feed"/>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/follow" component={FollowableUser} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
 */

function App() {
    return (
        <Router>
            <div className="app">
                <div className="container">
                    <Switch>
                        <Route path="/feed"/>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/login" component={LoginForm} />
                    </Switch>
                </div>
                <Route exact path="/follow" component={FollowableUser} />
            </div>
        </Router>
    );
}


export default App;