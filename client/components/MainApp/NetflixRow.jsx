import React, { useState, useEffect } from 'react';
import BookItem from './BookItem.jsx';

const NetflixRow = ({ category }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
                const data = await response.json();
                const bookData = data.works.map(work => ({
                    // id: work.key,
                    title: work.title,
                    author: work.authors && work.authors.length > 0 ? work.authors[0].name : 'Unknown Author',
                    coverUrl: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
                    // publishedDate: work.first_publish_year ? work.first_publish_year : 'Unknown',
                }));
                setBooks(bookData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    const handleAddToReadingList = (book) => {
        console.log("book ===> ", book);
        fetch('/addToReadingList', {
            method: "post",
            body: JSON.stringify(book),
            headers: {
                "Content-type": "application/json",
            },
        })
          .then(response => response.json())
          .catch(error => console.error(error));
      };

    return (
        <div className="category">
            <h2>{category}</h2>
        <div className="netflix-row">
            <div className="book-list">
                {books.map((book, index) => (
                    <BookItem  key={index} book={book} onAddToReadingList={handleAddToReadingList} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default NetflixRow;
