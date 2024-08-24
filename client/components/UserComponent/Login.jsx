import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = ({ onLogin }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // // Function to handle form submission
    // const handleLogin = async () => {
    //     try {
    //         // Call the onLogin function with username and password
    //         await onLogin(username, password);
            
    //         // Redirect to the home page or any desired route upon successful login
    //         navigate('/home');
    //     } catch (error) {
    //         setError('Invalid username or password');
    //     }
    // };

    // Function to navigate to the sign-up page
    const navigateToSignUp = () => {
        navigate('/signup');
    };

    const navigateToHome = () => {
        navigate('/home');
    }

      // Function to handle form submission
      const handleLogin = () => {
        // Perform sign-up request to the server
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
                // If sign-up is successful, call the onSignUp function
                onLogin();
                navigate('/home');
            } else {
                // Handle sign-up error (optional)
                setError('Invalid');
            }
        })
        .catch(error => {
            console.error('Error during login', error);
            // Handle sign-up error (optional)
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

// import { HeaderBeforeLogin } from '../Header.jsx';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const Login = () => {
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     const [error, setError] = useState('');

//     // Function to navigate to the sign-up page
//     const navigateToSignUp = () => {
//         navigate('/signup');
//     };

//     const navigateToHome = () => {
//         navigate('/home');
//     }

//       // Function to handle form submission
//       const handleLogin = () => {
//         // Perform sign-up request to the server
//         fetch('/login', {
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
//                 navigate('/home');
//             } else {
//                 // Handle sign-up error (optional)
//                 setError('Invalid');
//             }
//         })
//         .catch(error => {
//             console.error('Error during login', error);
//             // Handle sign-up error (optional)
//         });
//     };

//     return (
//         <div>
//         < HeaderBeforeLogin />
//         <div className="form-container">
//             <h2>Login</h2>
//             <form>
//             <input id="username" type="text" placeholder="Username" />
//                 <input id="password" type="password" placeholder="Password" />
//                 <button type="button" onClick={handleLogin}>Login</button>
//             </form>
//             {error && <p>{error}</p>}
//             <p>Don't have an account? <button onClick={navigateToSignUp}>Sign Up</button></p>
//         </div>
//         </div>
//     );
// };

// export default Login;
