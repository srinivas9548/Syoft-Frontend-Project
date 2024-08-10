import { Component } from 'react'

import './index.css'

import { Navigate } from 'react-router-dom';

class LoginPage extends Component {
    state = {
        user_email: '',
        user_password: '',
        showPassword: false,
        redirectToDashboard: false,
        redirectToSignUp: false
    }

    onSubmitLoginForm = async (event) => {
        event.preventDefault();
        const {user_email, user_password} = this.state

        const payload = {
            "user_email": user_email,
            "user_password": user_password
        };

        const apiUrl = "https://syoft.dev/Api/userlogin/api/userlogin"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        const response = await fetch(apiUrl, options);

        const data = await response.json();
        console.log(data)

        if (data.status === true) {
            const username = JSON.stringify(data.user_data[0]);
            localStorage.setItem('user', username);
            this.setState({redirectToDashboard: true})
        } else {
            alert("Login Failed");
        }
    }

    onChangeEmail = (event) => {
        this.setState({ user_email: event.target.value });
    }

    onChangePassword = (event) => {
        this.setState({ user_password: event.target.value });
    }

    onClickShowPassword = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword
        }))
    }

    onClickSignUp = () => {
        this.setState({redirectToSignUp: true})
    }

    render() {
        const { showPassword, user_email, user_password, redirectToDashboard, redirectToSignUp } = this.state

        if (redirectToDashboard) {
            return <Navigate to="/dashboard" />
        }

        if (redirectToSignUp) {
            return <Navigate to="/signup" />
        }

        return (
            <div className="login-page-container">
                <div className='login-page-content'>
                    <h1 className='login-page-heading'>Login</h1>
                    <p className='login-message'>You don't have an account? <span className='span-text' onClick={this.onClickSignUp}>sign up</span></p>
                    <form className='login-form-container' onSubmit={this.onSubmitLoginForm}>
                        <div className='login-label-input-container'>
                            <label htmlFor="userEmail" className='login-label-element'>User Email</label>
                            <input type="email" id="userEmail" value={user_email} onChange={this.onChangeEmail} className='login-input-element' required />
                        </div>
                        <div className='label-input-container'>
                            <label htmlFor="UserPassword" className='login-label-element'>User Password</label>
                            {showPassword ? (
                                <input type="text" id="UserPassword" value={user_password} onChange={this.onChangePassword} className='login-input-element' required />
                            ) : (
                                <input type="password" id="UserPassword" value={user_password} onChange={this.onChangePassword} className='login-input-element' required />
                            )}
                            <div className='checkbox-label-container' onClick={this.onClickShowPassword}>
                                <input type="checkbox" id="checkboxInput" />
                                <label htmlFor='checkboxInput' className='label-checkbox'>Show Password</label>
                            </div>
                        </div>
                        <div className='button-container'>
                            <button type="submit" className='login-button'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage