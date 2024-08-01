import React, { Component } from 'react'
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5"
import { Navigate } from 'react-router-dom'
import './index.css'

class SignUpPage extends Component {
    state = {
        user_firstname: '',
        user_email: '',
        user_password: '',
        user_phone: '',
        isShowPassword: false,
        errors: {},
        shouldRedirect: false
    }

    validateForm = () => {
        const { user_firstname, user_email, user_password, user_phone } = this.state;
        const errors = {};

        if (!user_firstname.trim()) {
            errors.user_firstname = 'Full name is required';
        }

        if (!user_email.trim()) {
            errors.user_email = 'Email address is required';
        }

        if (!user_password.trim()) {
            errors.user_password = 'Password is required';
        }

        if (!user_phone.trim()) {
            errors.user_phone = 'Phone number is required';
        }

        return errors;
    };

    onSubmitForm = async (event) => {
        event.preventDefault();

        const errors = this.validateForm();

        if (Object.keys(errors).length === 0) {
            const { user_firstname, user_email, user_password, user_phone } = this.state

            const userDetails = {
                user_firstname,
                user_email,
                user_password,
                user_phone,
                user_lastname: 'Doe',
                user_city: 'Hyderabad',
                user_zipcode: '500072',
            }

            const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration'
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            };

            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            if (response.ok === true) {
                alert("Registration Successfully");
                // Clear Input Fileds
                this.setState({
                    user_firstname: '',
                    user_email: '',
                    user_password: '',
                    user_phone: '',
                    isShowPassword: false,
                    errors: {},
                    shouldRedirect: true
                });
            } else {
                alert("Registration Failed");
            }
        } else {
            this.setState({ errors })
        }


    }

    onClickSignIn = () => {
        this.setState({shouldRedirect: true})
    }

    onChangeFullname = (event) => {
        this.setState({ user_firstname: event.target.value })
    }

    onChangeEmailAddress = (event) => {
        this.setState({ user_email: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ user_password: event.target.value })
    }

    onChangePhoneNumber = (event) => {
        this.setState({ user_phone: event.target.value })
    }

    onClickShowPassword = () => {
        this.setState(prevState => ({
            isShowPassword: !prevState.isShowPassword
        }))
    }

    render() {
        const { user_firstname, user_email, user_password, user_phone, isShowPassword, errors, shouldRedirect } = this.state

        if (shouldRedirect) {
            return <Navigate to="/login" replace />
        }

        return (
            <div className='signup-page-container'>
                <div className='signup-page-content'>
                    <img src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1722405824/jhqu3u564l2bxx1vh0qz.png"
                        alt="signup logo"
                        className='signup-image'
                    />
                    <form className='form-container' onSubmit={this.onSubmitForm}>
                        <img src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1722407668/zqtqf3hmhgr0v3utuhhu.png"
                            alt="icon logo"
                            className='icon-logo'
                        />
                        <h1 className='signup-heading'>Sign up</h1>
                        <p className='signup-context'>Already have an account? <span className='signin-text' onClick={this.onClickSignIn}>sign in</span></p>
                        <div className='label-input-container'>
                            <label htmlFor='fullName' className='label-element'>Full name *</label>
                            <input id="fullName" type="text" value={user_firstname} onChange={this.onChangeFullname} className='input-element' />
                            {errors.user_firstname && <p className='error-text'>* {errors.user_firstname}</p>}
                        </div>

                        <div className='label-input-container'>
                            <label htmlFor='email' className='label-element'>Email address *</label>
                            <input id="email" type="email" value={user_email} onChange={this.onChangeEmailAddress} className='input-element' />
                            {errors.user_email && <p className='error-text'>* {errors.user_email}</p>}
                        </div>

                        <div className='label-input-container'>
                            <label htmlFor='password' className='label-element'>Password *</label>
                            {isShowPassword ? (
                                <div className='input-element-password'>
                                    <input id="password" type="text" value={user_password} onChange={this.onChangePassword} className='password-element' />
                                    <IoEyeSharp size={18} onClick={this.onClickShowPassword} />
                                </div>
                            ) : (
                                <div className='input-element-password'>
                                    <input id="password" type="password" value={user_password} onChange={this.onChangePassword} className='password-element' />
                                    <IoEyeOffSharp size={18} onClick={this.onClickShowPassword} />
                                </div>
                            )}
                            {errors.user_password && <p className='error-text'>* {errors.user_password}</p>}
                        </div>

                        <div className='label-input-container'>
                            <label htmlFor='userPhone' className='label-element'>Phone number *</label>
                            <input id="userPhone" type="text" value={user_phone} onChange={this.onChangePhoneNumber} className='input-element' />
                            {errors.user_phone && <p className='error-text'>* {errors.user_phone}</p>}
                        </div>

                        <div className='checkbox-and-agree-statement'>
                            <input type="checkbox" />
                            <p className='agree-statement'>I agree to the <span className='agree-span'>Terms of Service </span> and <span className='agree-span'>Privacy Policy</span></p>
                        </div>

                        <button type="submit" className='create-account-button'>Create your free account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpPage