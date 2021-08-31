import React from 'react';
import Text from './text/text';
import Squares from './squares/squares';


class Info extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Text />
                <Squares />
            </div>
        )
    }
}

export default Info;