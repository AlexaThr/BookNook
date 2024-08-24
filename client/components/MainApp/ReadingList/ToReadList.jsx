import React, { useState, useEffect } from 'react';
import BookItem from '../BookItem.jsx';

const ParentComponent = () => {
    const [readingList, setReadingList] = useState([]);

    useEffect(() => {
        fetch('/reading-list')
            .then((res) => res.json())
            .then((data) => setReadingList(data.readingList))
            .catch((error) => console.error('Error fetching reading list:', error));
    }, []);

    return (
        <div className="content">
        <div className="category">
            <h2>My Reading List</h2>
            <div className="netflix-row">
                <div className="book-list">
                    {readingList.map((book, index) => (
                        <BookItem key={index} book={book} />
                    ))}
                </div>
            </div>
            <h2>Completed</h2>
        </div>
        </div>
    );
};

export default ParentComponent;

