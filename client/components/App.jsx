import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './UserComponent/SignUp.jsx';
import Login from './UserComponent/Login.jsx';
import { HeaderBeforeLogin, HeaderAfterLogin } from './Header.jsx';
import MainApp from './MainApp/MainApp.jsx';
import ParentComponent from './MainApp/ReadingList/ToReadList.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        window.location.href = '/';
    };

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <Router>
            <div>
                {isLoggedIn ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
                <div className="content">
                    <Routes>
                    {!isLoggedIn ? (
        <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} toggleForm={toggleForm} />} />
        </>
    ) : (
        <>
        <Route path="/home" element={<MainApp />} />
        <Route path="/reading-list" element={< ParentComponent />}/>
        </>
   )}
    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;