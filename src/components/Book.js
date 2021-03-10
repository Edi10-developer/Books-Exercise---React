import React from 'react';

class Book extends React.Component {
 
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}</h3>
            </div>
        )
    }
}
export default Book;