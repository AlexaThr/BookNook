import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import '../css/styles.css';

const HeaderAfterLogin = () => {
    const navigate = useNavigate();

    const handleReadingListClick = () => {
        navigate('/reading-list');
    };

    const handleAchievementsClick = () => {
        navigate('/achievements');
    };

    const handleSearchClick = () => {
        navigate('/search');
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
