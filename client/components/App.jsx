import "../css/styles.css";
import React, { useState } from 'react';
import SignUp from './UserComponent/SignUp.jsx';
import Login from './UserComponent/Login.jsx'
import { HeaderBeforeLogin, HeaderAfterLogin } from './Header.jsx'
import MainApp from './MainApp/MainApp.jsx';
import { createRoot } from 'react-dom/client';

function App() {
    const [showLogin, setShowLogin] = useState(true); // State to track which form to show
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status


    // Function to toggle between login and sign-up forms
    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    // Function to handle successful login
    const handleLogin = () => {
        setIsLoggedIn(true); // Set user as logged in
    };

    // Function to handle successful sign-up
    const handleSignUp = () => {
    // Redirect the user to the login page after successful sign-up
        window.location.href = '/';
    };

    return (
        <div>
            {!isLoggedIn ? < HeaderBeforeLogin /> : < HeaderAfterLogin />}
                <div className="content">
                    {!isLoggedIn && (showLogin ? <div className="form-container"><Login toggleForm={toggleForm} onLogin={handleLogin} /></div> : <div className="form-container"><SignUp className="form-container" toggleForm={toggleForm} onSignUp={handleSignUp} /></div>)}
                    {isLoggedIn && <MainApp />}
                </div>
            </div>
    );
}

export default App;


// const root = createRoot(document.querySelector('#root'));
// root.render(<><App/></>);