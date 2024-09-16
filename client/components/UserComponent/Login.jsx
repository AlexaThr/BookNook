import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

       const navigateToSignUp = () => {
        navigate('/signup');
    };

    const navigateToHome = () => {
        navigate('/home');
    }

      const handleLogin = () => {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            }),
        })
        .then(response => {
            if (response.ok) {
                onLogin();
                navigateToHome();
            } else {
                setError('Invalid');
            }
        })
        .catch(error => {
            console.error('Error during login', error);
        });
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
            <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
            {error && <p>{error}</p>}
            <p>Don't have an account? <button onClick={navigateToSignUp}>Sign Up</button></p>
        </div>
    );
};

export default Login;