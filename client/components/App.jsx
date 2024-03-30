import "../css/styles.css";
import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom';

function App() {
    return (
        <span className="app-header">
            {/* <h1>{Login()}</h1> */}
            <header class="flex-container"> 
                <p class="home-page-header"><a> My Reading List </a></p> 
                <p class="home-page-header"><a> My Achievements </a></p> 
                <p class="home-page-header"><a> Library </a></p> 
                <a href="/login" className="button">Login</a>
                <a href="/signup" className="button">Sign up</a>
            </header>
        </span>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<><App/></>);
export default App;