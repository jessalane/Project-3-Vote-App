import React, {useState} from 'react';
import ('../../css/profile.css');


function Profile() {
  const username = localStorage.getItem('username');
  return (
    <section id="profile">
      <h1>Welcome {username}!</h1>
      <h4>Your Polls</h4>
      <ul>
        <li>list</li>
        <li>each</li>
        <li>poll</li>
        <li>here</li>
      </ul>
      <h4>Create New Poll</h4>
      <form className="newPollForm">
        <button>
          Click To Start
        </button>
      </form>
    </section>
  );
}

export default Profile;
