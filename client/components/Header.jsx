import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import BrowserRouter and useNavigate
import '../css/styles.css'; // Import your CSS file

const HeaderAfterLogin = () => {
    const navigate = useNavigate();

    // Event handler for navigating to My Reading List page
    const handleReadingListClick = () => {
        navigate('/reading-list'); // Redirect to reading list page
    };

    // Event handler for navigating to My Achievements page
    const handleAchievementsClick = () => {
        navigate('/achievements'); // Redirect to achievements page
    };

    // Event handler for navigating to Search page
    const handleSearchClick = () => {
        navigate('/search'); // Redirect to search page
    };

    const handleHomepage = () => {
        navigate('/home');
    }

    return (
        <div className="header">
            <h1>BookNook</h1>
            <div className="tabs">
                <button className="tab" onClick={handleHomepage}>Home</button>
                <button className="tab" onClick={handleReadingListClick}>My Reading List</button>
                <button className="tab" onClick={handleAchievementsClick}>My Achievements</button>
                <button className="tab" onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    );
};

const HeaderBeforeLogin = () => {
    return (
        <div className="header">
            <h1>BookNook</h1>
        </div>
    );
};

export { HeaderAfterLogin, HeaderBeforeLogin };
