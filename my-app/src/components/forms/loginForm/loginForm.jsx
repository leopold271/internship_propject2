import React from 'react';

class LoginForm extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            EmailIsValid: true,
            PasswordISValid: true,
            email: '',
            password: ''
        }
        
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
    };
    
    emailOnChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    passwordOnChange(event) {
        this.setState({
            password: event.target.value
        })
    } 

    handleEmailBlur() {
       if(!this.state.email.includes('@')) {
           this.setState({
               EmailIsValid: false
           })
       } else {
        this.setState({
            EmailIsValid: true
        }) 
       }
    }

    handlePasswordBlur() {
        if(this.state.password.length < 8) {
            this.setState({
                PasswordISValid: false
            }) 
        } else {
            this.setState({
                PasswordISValid: true
            })
        }
    }

    render() {
        return(
            <div className="loginFormContainer">
                <p>Enter your email and password</p>
                <form className="loginForm">
                    <label >Email:</label>
                    <br />
                    <input onChange={this.emailOnChange} value={this.state.email} onBlur={this.handleEmailBlur} className={this.state.EmailIsValid ? 'valid' : 'invalid'} type="email" />
                    <br />
                    <label >Password:</label>
                    <br />
                    <input onChange={this.passwordOnChange} value={this.state.password} onBlur={this.handlePasswordBlur} className={this.state.PasswordISValid ? 'valid' : 'invalid'} type="password" />
                    <br />
                    <input id="submitLoginForm" type="submit" />
                </form>
            </div>
        )
    }
    
}

export default LoginForm;