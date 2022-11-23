import '../../css/newPoll.css';

import React  from 'react';
import {useParams} from 'react-router-dom';
import QRCode from "react-qr-code";
import Poll from './poll';

function NewPoll() {
  
  const {id}=useParams();
  // TODO: update link with heroku deployed link 
  const url = 'http://localhost:3000/newpoll/' + id
  
  return (
    <section id="newPoll">
      {/* <QRCode value= {url} /> */}
      <h1>Create Your Poll!</h1>
      <form
        className="form"
      >
        <h2>Poll Title</h2>
        <input
            name="title"
            type="text"
            placeholder="What we are voting on"
            className="pollTitle"
            required
          />
        </form>
        <form
          className="optionForm"
        >
          {/* option one */}
          <div className="pollGroup">
          <h2>Option One</h2>
          <input
            name="option1"
            type="text"
            placeholder="Option One"
            required
          />
          <input
            name="image1"
            type="text"
            placeholder="Image One"
            required
          />
          </div>
          {/* option two */}
          <div className="pollGroup">
          <h2>Option Two</h2>
          <input
            name="option2"
            type="text"
            placeholder="Option Two"
            required
          />
          <input
            name="image2"
            type="text"
            placeholder="Image Two"
            required
          />
          </div>
          {/* option three */}
          <div className="pollGroup">
          <h2>Option Three</h2>
          <input
            name="option3"
            type="text"
            placeholder="Option Three"
            required
          />
          <input
            name="image3"
            type="text"
            placeholder="Image Three"
            required
          />
          </div>
          {/* option four */}
          <div className="pollGroup">
          <h2>Option Four</h2>
          <input
            name="option4"
            type="text"
            placeholder="Option Four"
            required
          />
          <input
            name="image4"
            type="text"
            placeholder="Image Four"
            required
          />
          </div>
          {/* option five */}
          <div className="pollGroup">
          <h2>Option Five</h2>
          <input
            name="option5"
            type="text"
            placeholder="Option Five"
            required
          />
          <input
            name="image5"
            type="text"
            placeholder="Image Five"
            required
          />
          </div>
          {/* option six */}
          <div className="pollGroup">
          <h2>Option Six</h2>
          <input
            name="option6"
            type="text"
            placeholder="Option Six"
            required
          />
          <input
            name="image6"
            type="text"
            placeholder="Image Six"
            required
          />
          </div>
        {/* submit button */}
          <input class='submitBtn'
            name="Submit"
            type="submit"
            text="Submit"
            />
      </form>

    </section>
  );
};
export default NewPoll;

// Look at 22/15 for the backend connection to the front end. Create a new resolver to create a new