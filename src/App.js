import React from 'react';
import Book from './components/Book';

//Import data.json 
import data from './data.json';

class App extends React.Component {

    render() {

        // Create arrays with the titles using MAP() and the 2 variables 
        const titles   = data.map((book) => book.title);
        const titleOne = titles[0];
        const titleTwo = titles[1];

        // Create arrays with the authors using MAP() and the 2 variables
        const authors   = data.map((book) => book.author);
        const authorOne = authors[0];
        const authorTwo = authors[1];

        return (
            <div>
                <Book
                    title={titleOne}
                    author={authorOne}
                />
                <Book
                    title={titleTwo}
                    author={authorTwo}
                />
            </div>
        )
    };
};

export default App;