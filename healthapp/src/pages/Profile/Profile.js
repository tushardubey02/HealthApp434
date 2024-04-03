import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="photo-placeholder"></div>
      <h1>Name: John Doe</h1>
      <h2>Username: johndoe123</h2>
      <h3>Email: john@example.com</h3>
    </div>
  );
}

export default Profile;