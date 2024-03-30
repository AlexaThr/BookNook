import "../css/styles.css";
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <span className="app-header">
            {/* <h1>{Login()}</h1> */}
            <header className="flex-container"> 
                <p className="home-page-header"><a> My Reading List </a></p> 
                <p className="home-page-header"><a> My Achievements </a></p> 
                <p className="home-page-header"><a> Library </a></p> 
                <a href="/login" className="button">Login</a>
                <a href="/signup" className="button">Sign up</a>
            </header>
        </span>
    )
}

// const root = createRoot(document.querySelector('#root'));
// root.render(<><App/></>);
export default App;