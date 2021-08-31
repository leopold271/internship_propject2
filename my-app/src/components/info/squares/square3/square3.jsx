import React from 'react';

class Square3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const e = React.createElement;
        return (
            e('div', { className: 'square3' }, [
                e('div', { className: 'list' }, [
                    e('ul', null, [
                        e('li', null, 'Lorem'),
                        e('li', null, 'Lorem'),
                        e('li', null, 'Lorem'),
                        e('li', null, 'Lorem'),
                        e('li', null, 'Lorem'),
                    ]),
                    e('div', { id: 'createCookies', className: 'createCookies' }, [
                        e('button', { type: 'button' }, 'create cookies')
                    ])
                ])
            ])
        )
    }
}

export default Square3;