import React, { useState } from 'react';
import CSSLoader from "../../functions/CSSLoader";
import axios from '../../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    CSSLoader('assets/css/login.css'); 
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState(''); // State to handle API errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
           
        if (!userDetails.username) {
            errors.username = "Username is required";
        }
        
        if (!userDetails.password) {
            errors.password = "Password is required";
        } 

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        setApiError(''); // Reset API error before submission

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                const payload = {
                    username: userDetails.username,
                    password: userDetails.password
                };
                const response = await axios.post('users/auth', payload);
                console.log('Login successful:', response.data);
                
                // Save JWT token to localStorage
                localStorage.setItem('jwtToken', `${response.data.data.token}`);
                navigate('/home');
                // Redirect to a protected route, e.g., dashboard
                // navigate('/dashboard'); // Uncomment if you have routing set up

            } catch (error) {
                console.error('Error logging in:', error);
                if (error.response && error.response.data) {
                    setApiError(error.response.data.message || "An error occurred during login.");
                } else {
                    setApiError("An unexpected error occurred. Please try again later.");
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className='login_body'>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name='username' 
                            placeholder="Username" 
                            onChange={handleChange} 
                            value={userDetails.username}
                        />
                        {formErrors.username && <p className="text-danger">{formErrors.username}</p>}
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            name='password'  
                            placeholder="Password" 
                            onChange={handleChange} 
                            value={userDetails.password}
                        />
                        {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                    </div>
                    {apiError && <p className="text-danger">{apiError}</p>} {/* Display API error */}
                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging In...' : 'Log In'}
                    </button>
                    <div className="signup-link">
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
