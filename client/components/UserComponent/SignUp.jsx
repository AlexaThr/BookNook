// SignUp.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const SignUp = ({ onSignUp }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle form submission
    const handleSignUp = () => {
        // Perform sign-up request to the server
        fetch('/signup', {
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
                // If sign-up is successful, call the onSignUp function
                onSignUp();
            } else {
                // Handle sign-up error (optional)
            }
        })
        .catch(error => {
            console.error('Error during sign-up:', error);
            // Handle sign-up error (optional)
        });

      
    };

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form>
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
                <button type="button" onClick={handleSignUp}>Sign Up</button>
            </form>
            <p>Already have an account? <button onClick={navigateToLogin}>Login</button></p>
        </div>
    );
};

export default SignUp;

// SignUp.jsx

// import { HeaderBeforeLogin } from '../Header.jsx';
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


// const SignUp = ({ onSignUp }) => {
//     const navigate = useNavigate(); // Initialize useNavigate hook

//     // Function to handle form submission
//     const handleSignUp = () => {
//         // Perform sign-up request to the server
//         fetch('/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username: document.getElementById('username').value,
//                 password: document.getElementById('password').value,
//             }),
//         })
//         .then(response => {
//             if (response.ok) {
//                 // If sign-up is successful, call the onSignUp function
//                 onSignUp();
//             } else {
//                 // Handle sign-up error (optional)
//             }
//         })
//         .catch(error => {
//             console.error('Error during sign-up:', error);
//             // Handle sign-up error (optional)
//         });

      
//     };

//     const navigateToLogin = () => {
//         navigate('/login');
//     };

//     return (
//         <div>
//             < HeaderBeforeLogin />
//         <div className="form-container">
//             <h2>Sign Up</h2>
//             <form>
//                 <input id="username" type="text" placeholder="Username" />
//                 <input id="password" type="password" placeholder="Password" />
//                 <button type="button" onClick={handleSignUp}>Sign Up</button>
//             </form>
//             <p>Already have an account? <button onClick={navigateToLogin}>Login</button></p>
//         </div>
//         </div>
//     );
// };

// export default SignUp;