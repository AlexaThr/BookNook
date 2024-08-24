import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './UserComponent/SignUp.jsx';
import Login from './UserComponent/Login.jsx';
import { HeaderBeforeLogin, HeaderAfterLogin } from './Header.jsx';
import MainApp from './MainApp/MainApp.jsx';
import ParentComponent from './MainApp/ReadingList/ToReadList.jsx';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status
    const [showLogin, setShowLogin] = useState(false);

    // Function to handle successful login
    const handleLogin = () => {
        setIsLoggedIn(true); // Set user as logged in
    };

    // Function to handle successful sign-up
    const handleSignUp = () => {
        // Redirect the user to the login page after successful sign-up
        window.location.href = '/';
    };

        // Function to toggle between login and sign-up forms
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


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SignUp from './UserComponent/SignUp.jsx';
// import Login from './UserComponent/Login.jsx';
// import ReadingList from './MainApp/ReadingList/ReadingList.jsx';
// import { HeaderBeforeLogin, HeaderAfterLogin } from './Header.jsx';
// import MainApp from './MainApp/MainApp.jsx';

// function App() {
//     // Function to handle successful sign-up
//     const handleSignUp = () => {
//         // Redirect the user to the login page after successful sign-up
//         window.location.href = '/';
//     };  

//     return (
//         <Router>
//             <div>
//                 <div className="content">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="/login" />} />
//                         {/* <Route path="/login" element={<Login />} /> */}
//                         {/* <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} /> */}
//                         <Route path="/home" element={<MainApp />} />
//                         {/* <Route path="/reading-list" element={<ReadingList />} /> */}
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default App;