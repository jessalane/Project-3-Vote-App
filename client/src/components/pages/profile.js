import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/newPoll/1">
        <button>
          Click To Start
        </button>
      </Link>
      </form>
    </section>
  );
}

export default Profile;
