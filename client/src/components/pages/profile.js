import React from 'react';
import ('../../css/profile.css')


function Profile() {
  return (
    <section id="profile">
      <h1>Welcome (USERNAME)!</h1>
      <h4>Your Polls</h4>
      <ul>
        <li>list</li>
        <li>each</li>
        <li>poll</li>
        <li>here</li>
      </ul>
      <h4>Create New Poll</h4>
      <form class="newPollForm">
        <button class="newPollButton">Click To Start</button>
      </form>
    </section>
  );
}

export default Profile;
