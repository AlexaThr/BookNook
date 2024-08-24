import { HeaderAfterLogin } from '../Header.jsx';
import React, { useState } from 'react';
import NetflixRow from './NetflixRow.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReadingList from './ReadingList/ReadingList.jsx';


const MainApp = () => {

     // Function to handle clicking on My Reading List
    const [readingList, setReadingList] = useState(false);

    return (
        // <div>
        //     < HeaderAfterLogin />
        <div className="main-app">
            <div className="content">
            <NetflixRow category="fantasy" />
            <NetflixRow category="science-fiction" />
            <NetflixRow category="mystery" />
            <NetflixRow category="romance" />
            </div>
        </div>
        // </div>
    );
};

export default MainApp;

