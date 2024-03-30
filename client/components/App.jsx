import "../css/styles.css";
// import Login from "./components/login.jsx";
// import Vendor from "./components/vendors.jsx"
// import Calendar from "./components/calendar.jsx";
// import RelaxMode from "./components/relax-mode.jsx";
// import store from './store';
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
            </header>
            <div>
                <h1 class="calendar-test"> Calendar</h1>
                <h1 class="vendor-test">hi</h1>
            </div>
            <footer>
                <p class="home-page-footer"><a> Home </a></p>
                <p class="home-page-footer"><a> Calendar </a></p> 
                <p class="home-page-footer"><a> Guests </a></p> 
            </footer>
        </span>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<><App/></>);