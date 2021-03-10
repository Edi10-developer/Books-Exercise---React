import React from 'react';
//Import data.json 
import data from '../data.json';

class Book extends React.Component {

    render() {
        // Create arrays with the titles
        const titles = data.map((book) => book.title);
        // Create arrays with the authors
        const authors = data.map((book) => book.author);

        return (
            <div>
                <h1>Books</h1>
                <h2>Titles:</h2>
                <ul>
                    {titles.map((title, index) => // From titles array
                        <li key={index}>{title}</li> // Create a <li> element with the index and the title - p.s. I've tried withouth key={} but is not working, we MUST declare the KEY
                    )} 
                </ul> 
                <h2>Authors:</h2>
                <ul>
                    {authors.map((author, index) => // From authors array
                        <li key={index}>{author}</li> // Create a <li> element with the index and the author
                    )}
                </ul>
            </div>
        );
    }
}
export default Book;