import React from 'react';
import './Profile.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Profile = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        return <p>No user logged in.</p>;
    }

    return (
        <div className="profile">
            <Navbar/>
            <div className='profile-container'>
                <h1>User Profile</h1>
                <p><strong>Username:</strong> {loggedInUser.name}</p>
                <p><strong>Email:</strong> {loggedInUser.email}</p>
                <p><strong>Role:</strong> {loggedInUser.role}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;
