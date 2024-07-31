


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/signup', {
                email,
                password,
            });
            navigate('/login');
        } catch (err) {
            console.error('Signup error:', err);
            setError('Error signing up. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-box">
                <h2 className="signup-heading">Signup</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <p>Already have an account? <a href="/login">login in here</a>.</p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
