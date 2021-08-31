import React from 'react';
import LoginForm from './loginForm/loginForm';
import UserDataForm from './userDataForm/userDataForm';

class Forms extends React.Component {

    render() {
        return (
            <div>
                <LoginForm />
                <UserDataForm />
            </div>
        )
    }
}

export default Forms;