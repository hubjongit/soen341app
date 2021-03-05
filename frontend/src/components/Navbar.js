import React, {useState, useLayoutEffect} from 'react';
import SubmitButton from './SubmitButton';
import LogoutForm from './LogoutForm';
import {getIsAuthenticated} from '../GlobalFunctions'
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const location = useLocation()
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useLayoutEffect(() => {
        getIsAuthenticated((data => {
            setIsAuthenticated(data);
        }));
    }, [location]);

    return (
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/feed" className="logo">
                    SnowFlake
                </Link>
                {isAuthenticated ? (
                    <div className="user-status">
                        <LogoutForm/>
                    </div>
                ) : (
                    <div className="user-status">
                        <Link to="/login">
                            <SubmitButton text='Login'/>
                        </Link>
                        <Link to="/register">
                            <SubmitButton text='Register'/>
                        </Link>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Navbar;
