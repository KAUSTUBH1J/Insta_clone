import React, { useState, useContext } from 'react';
import CSSLoader from "../../functions/CSSLoader";
import { ThemeContext } from '../context';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../utils/axiosConfig';

const Signup = () => {
    const { isDarkMode } = useContext(ThemeContext);
    CSSLoader('assets/css/signup.css');

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        username: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState(''); // State to store general API error message

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let errors = {};
        
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        
        if (!formData.fullName) {
            errors.fullName = "Full Name is required";
        }
        
        if (!formData.username) {
            errors.username = "Username is required";
        }
        
        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        setApiError(''); // Reset API error message before submission

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                const payload = {
                    name: formData.fullName,
                    username: formData.username,
                    email: formData.email,
                    profile_pic: "string",
                    bio: "nothing",
                    is_private: false,
                    password: formData.password
                };
                const response = await axios.post('users/', payload);
                console.log('Signup successful:', response.data);
                
                // Navigate to the login page after successful signup
                // if (response.status === 200) {
                    navigate('/login');
                // }
            } catch (error) {
                console.error('Error signing up:', error);
                if (error.response && error.response.data) {
                    const apiErrors = error.response.data.errors;
                    let newFormErrors = {};

                    // Map API errors to form fields and include the field name in the error message
                    if (apiErrors && apiErrors.length > 0) {
                        apiErrors.forEach(err => {
                            newFormErrors[err.field] = `${err.field}: ${err.message}`;
                        });
                    } else {
                        setApiError(error.response.data.message || "An error occurred during signup");
                    }

                    setFormErrors(newFormErrors);
                } else {
                    setApiError("An unexpected error occurred. Please try again later.");
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className={`signup_body ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className={`signup-container p-4 border rounded shadow-sm ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" className="logo mb-4" width="150" />
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>
                        {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                        
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                name="fullName" 
                                className="form-control" 
                                placeholder="Full Name" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                            />
                        </div>
                        {formErrors.fullName && <p className="text-danger">{formErrors.fullName}</p>}
                        
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                name="username" 
                                className="form-control" 
                                placeholder="Username" 
                                value={formData.username} 
                                onChange={handleChange} 
                            />
                        </div>
                        {formErrors.username && <p className="text-danger">{formErrors.username}</p>}
                        
                        <div className="input-group mb-3">
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                placeholder="Password" 
                                value={formData.password} 
                                onChange={handleChange} 
                            />
                        </div>
                        {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                        <div className='error'>
                            {apiError && <div className="text-danger mb-3">{apiError}</div>} {/* Display general API error */}
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="login-link mt-3 text-center">
                        <p>Have an account? <a href="/login">Log in</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
