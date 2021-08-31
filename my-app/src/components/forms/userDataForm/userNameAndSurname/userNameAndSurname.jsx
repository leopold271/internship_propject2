import React from 'react';

class UserNameAndSurname extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const e = React.createElement;
        return(
            e('div', {className: 'nameAndSurname'}, [
                e('p', null, this.props.name),
                e('p', null, this.props.surname)
            ])
        )
    }
}

export default UserNameAndSurname;