// Login.jsx

import React from 'react';

const Login = ({ toggleForm, onLogin }) => {
    // Function to handle form submission
    const handleLogin = () => {
        // Perform login request to the server
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
                // If login is successful, call the onLogin function
                onLogin();
            } else {
                // Handle login error (optional)
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            // Handle login error (optional)
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
            <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
        </div>
    );
};

export default Login;

