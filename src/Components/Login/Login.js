import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    const handleClick = () => {
        // Define your click handler logic here
    };

    return (
        <div className="container">
            <div className="login-grid">
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                <div className="login-text">
                    Are you a new member? 
                    <span>
                        <Link to="/signup" style={{ color: '#2190FF' }}> Sign Up Here</Link>
                    </span>
                </div>
                <br />
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Please enter a valid email address.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <br />
                        <div className="login-text">
                            Forgot Password?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
