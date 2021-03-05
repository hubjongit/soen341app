import React from "react";
import {Redirect, Route} from "react-router-dom";

class ProtectedRoute extends React.Component {

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
            console.log('protectedroute componentWillReceiveProps');
            // this.props.isAuthenticated = nextProps.isAuthenticated;
            this.setState({isAuthenticated: nextProps.isAuthenticated});
        }
    }

    render() {
        const {isAuthenticated: isAuthenticated, redirect: redirect, ...props} = this.props;
        console.log('protectedroute rendering');
        return (
            isAuthenticated ?
                <Route
                    {...props}
                /> :
                <Redirect to={redirect}/>
        )
    }
}

export default ProtectedRoute;