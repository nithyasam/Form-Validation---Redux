import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { FormErrors } from './formErrors';

class Users extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            formErrors: {username: '', password: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    onUserUpdate(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value},
            () => { this.validateField(name,value) });
    }
    addUser(event) {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        this.state.formValid? this.props.createUser(user) : ''
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'username':
                usernameValid = value.length >=4;
                fieldValidationErrors.username = usernameValid ? '' : ' username should be greater than 4 characters';
                break;
            case 'password':
                passwordValid = value.length >=6;
                fieldValidationErrors.password = passwordValid ? '' : ' password should be greater than 6 characters';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({
            formValid: this.state.usernameValid && this.state.passwordValid
        })
    }
    render () {
        return(
            <div style={{padding: 24}}>
                <label htmlFor='username' style={{padding: 24}}>Email address</label>
                <input onChange={this.onUserUpdate.bind(this)} type='text' name='username' value={this.state.username} /> <br />
                <label htmlFor='password' style={{padding: 24}}>Password</label>
                <input onChange={this.onUserUpdate.bind(this)} type='password' name='password' value={this.state.password} /> <br />
                <button onClick={this.addUser.bind(this)}>Add User</button>
                <div>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
             </div>
    )
    }


}

const stateToProps = (state) => {
    return {
        user: state.user
    }
}

const dispatchToProps = (dispatch)=> {
    return {
        createUser: (user) => dispatch(actions.createUser(user))

    }
}

export default connect(stateToProps, dispatchToProps)(Users)