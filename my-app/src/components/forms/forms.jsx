import React from 'react';
import LoginForm from './loginForm/loginForm';
import UserDataForm from './userDataForm/userDataForm';



const Forms = (props) => {
    return (
        <div>
            <LoginForm />
            <UserDataForm />
        </div>
    )
}

export default Forms;