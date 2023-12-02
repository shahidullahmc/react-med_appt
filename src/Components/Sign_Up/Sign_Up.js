import React from "react";
import { Link } from "react-router-dom";
import './Sign_Up.css';

const Sign_Up = () => {
    const handleClick = () => {
        // Define your click handler logic here
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left' }}>
                    Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}> Login</Link></span>
                </div>
                <div className="signup-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" required pattern="[0-9]{10}" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Please enter a 10-digit phone number.</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>
                        
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
