import React from 'react';
import {useParams} from 'react-router-dom';
import QRCode from "react-qr-code";

function NewPoll() {
    const {id}=useParams();
    // TODO: update link with heroku deployed link 
    const url = 'http://localhost:3000/newpoll/' + id
  return (
    <section id="newPoll">
      <div id="titleContainer">
        <h1>{url}</h1>
        <h2>please register to create a poll</h2>
        
        <QRCode value= {url} />
      </div>
    </section>
  );
};

export default NewPoll;

// Look at 22/15 for the backend connection to the front end. Create a new resolver to create a new