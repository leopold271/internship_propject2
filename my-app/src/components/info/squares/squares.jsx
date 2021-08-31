import React from 'react';
import Square1 from './square1/square1';
import Square2 from './square2/square2';
import Square3 from './square3/square3';

class Squares extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='squares'>
                <Square1 />
                <Square2 />
                <Square3 />
            </div>
        )
    }
}

export default Squares;