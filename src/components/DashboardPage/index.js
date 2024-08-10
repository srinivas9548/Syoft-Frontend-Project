import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import './index.css';

class DashboardPage extends Component {
    state = {
        user: null,
        isMenuOpen: false
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

    onClickLogout = () => {
        localStorage.removeItem('user');
        this.setState({ redirectToLogin: true });
    };

    onClickHamburgerMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    render() {
        const { user, redirectToLogin, isMenuOpen } = this.state;

        if (redirectToLogin) {
            return <Navigate to="/login" />;
        }

        const userInitial = user ? user.user_firstname.charAt(0).toUpperCase() : 'U';

        return (
            <div className="dashboard-page-container">
                <div className='navbar'>
                    <div className='navbar-content'>
                        <h1 className='navbar-brand'>syoft<span className='dot'>.</span></h1>
                        <div className='profile-and-header-section'>
                            <ul className='nav-header-list'>
                                <li>About Syoft</li>
                                <li>Services</li>
                                <li>Technologies</li>
                                <li>Blogs</li>
                                <li>Careers</li>
                            </ul>
                            <div className='profile-menu'>
                                <button onClick={this.onClickLogout} className="logout-button">Logout</button>
                            </div>
                            <div className='profile-icon'>
                                {userInitial}
                            </div>
                        </div>
                        <div className='hamburger-menu' onClick={this.onClickHamburgerMenu}>
                            <RxHamburgerMenu />
                        </div>
                    </div>
                </div>
                <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                    <div className='sidebar-header'>
                        <h1 className='sidebar-brand'>syoft<span className='dot'>.</span></h1>
                        <button className="close-sidebar" onClick={this.onClickHamburgerMenu}>X</button>
                    </div>
                    <ul className='sidebar-list'>
                        <li>About Syoft</li>
                        <li>Services</li>
                        <li>Technologies</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li onClick={this.handleLogout}>Logout</li>
                    </ul>
                </div>
                <div className='dashboard-main-container'>
                    <h1 className='user-name-greeting'>welcome! {user ? user.user_firstname : 'User'}</h1>
                    <div className='dashboard-section-container'>
                        <img
                            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1723262124/sv1cbllyqomcvudpuuvv.jpg"
                            alt="software website"
                            className='software-website-img'
                        />
                        <div className='dashboard-content'>
                            <h2 className='sub-heading'>About Syoft</h2>
                            <p className='sub-description'>
                                We help our customers experience splendid digital growth and thrive in the
                                digital era. Breaking down the barriers and guiding clients to grow faster
                                than the market to maximize operational excellence and build a scalable,
                                resilient organization.
                            </p>
                        </div>
                        <div className='dashboard-content'>
                            <h2 className='sub-heading'>Carrer</h2>
                            <p className='sub-description'>
                                At our company, we believe that our team is our greatest asset. We are always
                                looking for talented, motivated individuals who are eager to make a difference.
                                If you are looking for a dynamic and challenging work environment, we want to
                                hear from you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;
