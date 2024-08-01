import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './index.css';

class DashboardPage extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.setState({ user });
        } else {
            // Redirect to login if no user data is found in local storage
            this.setState({ redirectToLogin: true });
        }
    }

    handleLogout = () => {
        localStorage.removeItem('user');
        this.setState({ redirectToLogin: true });
    };

    render() {
        const { user, redirectToLogin } = this.state;

        if (redirectToLogin) {
            return <Navigate to="/login" />;
        }

        return (
            <div className="dashboard-page-container">
                <div className="dashboard-content">
                    <h1 className="greeting">Welcome, {user ? user.user_firstname : 'User'}!</h1>
                    <div className="user-info">
                        <h2>User Information</h2>
                        <p><strong>Full Name:</strong> {user ? user.user_firstname + ' ' + user.user_lastname : 'N/A'}</p>
                        <p><strong>Email:</strong> {user ? user.user_email : 'N/A'}</p>
                        <p><strong>Phone Number:</strong> {user ? user.user_phone : 'N/A'}</p>
                        <p><strong>City:</strong> {user ? user.user_city : 'N/A'}</p>
                        <p><strong>Zip Code:</strong> {user ? user.user_zipcode : 'N/A'}</p>
                    </div>
                    <button onClick={this.handleLogout} className="logout-button">Logout</button>
                </div>
            </div>
        );
    }
}

export default DashboardPage;
