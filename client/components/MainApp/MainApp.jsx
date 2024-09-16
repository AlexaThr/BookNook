import React, { useState } from 'react';
import NetflixRow from './NetflixRow.jsx';


const MainApp = () => {

    const [readingList, setReadingList] = useState(false);

    return (
        <div className="main-app">
            <div className="content">
            <NetflixRow category="fantasy" />
            <NetflixRow category="science-fiction" />
            <NetflixRow category="mystery" />
            <NetflixRow category="romance" />
            </div>
        </div>
    );
};

export default MainApp;

