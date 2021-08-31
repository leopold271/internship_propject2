import React from 'react';
import RepoData from './repoData/repoData';
import UserNameAndSurname from './userNameAndSurname/userNameAndSurname';


class UserDataForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
        }

        this.nameOnChange = this.nameOnChange.bind(this);
        this.surnameOnchange = this.surnameOnchange.bind(this);
        this.resetNameAndSurname = this.resetNameAndSurname.bind(this);

    }

    nameOnChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    surnameOnchange(e) {
        this.setState({
            surname: e.target.value
        })
    }

    resetNameAndSurname(e) {
        e.preventDefault();
        this.setState({
            name: '',
            surname: ''
        })
    }


    render() {
        const e = React.createElement;
        return (
            e('div', { className: 'info' }, [
                e('div', { className: 'infoName' }, [
                    e('form', null, [
                        e('label', {htmlFor: 'name'}, 'Your name: '),
                        e('input', { type: 'text', id: 'name', onChange: this.nameOnChange, value: this.state.name}),
                        e('br', null),
                        e('label', {htmlFor: 'surname'}, 'Your surname: '),
                        e('input', { type: 'text', id: 'surname', onChange: this.surnameOnchange, value: this.state.surname}),
                        e('br', null),
                        e('input', { type: 'reset', onClick: this.resetNameAndSurname}),
                        e('input', { type: 'submit', id: 'submmitFullName' })
                    ])
                ]),
                e('div', { className: 'gender' }, [
                    e('p', null, 'Select your gender'),
                    e('form', null, [
                        e('input', { type: 'radio', id: 'male' }),
                        e('label', {htmlFor: 'male'}, 'Male'),
                        e('input', { type: 'radio', id: 'female' }),
                        e('label', {htmlFor: 'female'}, 'Female')
                    ])
                ]),
                e('div', { className: 'colors' }, [
                    e('form', null, [
                        e('label', {htmlFor: 'colors'}, 'Choose your favorite color/s'),
                        e('br', null),
                        e('select', {name: 'colors', id: 'colors', size: '5', defaultValue: 'red'}, [
                            e('option', {value: 'red'}, 'red'),
                            e('option', {value: 'green'}, 'green'),
                            e('option', {value: 'blue'}, 'blue'),
                            e('option', {value: 'black'}, 'black'),
                            e('option', {value: 'yellow'}, 'yellow'),
                        ]),
                        e('br', null),
                        e('input', {type: 'submit'})
                    ])
                ]),
                e('div', { className: 'vehicle' }, [
                    e('form', null, [
                        e('label', null, 'What type of vehicle do you prefer?'),
                        e('br', null),
                        e('label', null, 'Car'),
                        e('input', {type: 'checkbox', id: 'car'}),
                        e('br', null),
                        e('label', null, 'Bicycle'),
                        e('input', {type: 'checkbox', id: 'bicycle'}),
                        e('br', null),
                        e('label', null, 'Scooter'),
                        e('input', {type: 'checkbox', id: 'scooter'}),
                        e('br', null)
                    ])
                ]),
                <UserNameAndSurname name={this.state.name} surname={this.state.surname}/>,
                <RepoData/>
            ])

           
        )
    }
}

export default UserDataForm;