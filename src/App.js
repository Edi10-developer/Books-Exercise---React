import React from 'react';
import Book from './components/Book';

class App extends React.Component {

    render() {
        return (
            <div>
                <Book
                    value='Viadge a la lluna'
                />
            </div>
        )
    };
};

export default App;