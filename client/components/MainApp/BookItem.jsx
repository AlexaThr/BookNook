// BookItem.jsx

import React from 'react';

const BookItem = ({ book, onAddToReadingList }) => {

    return (
        <div className="book-item">
            <img src={book.coverUrl} alt={book.title} />
            <div className="book-details">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <button className="add" onClick={() => {
                    onAddToReadingList(book);
                }}>+</button>
            </div>
        </div>
    );
};

export default BookItem;

