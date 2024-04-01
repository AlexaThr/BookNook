import React from 'react';
import '../css/styles.css'; // Import your CSS file

const HeaderAfterLogin = () => {
    return (
        <div className="header">
            <h1>BookNook</h1>
            <div className="tabs">
                <button className="tab">My Reading List</button>
                <button className="tab">My Achievements</button>
                <button className="tab">Search</button>
            </div>
        </div>
    );
}

const HeaderBeforeLogin = () => {
    return (
        <div className="header">
            <h1>BookNook</h1>
        </div>
    )
}

export { HeaderAfterLogin, HeaderBeforeLogin }
