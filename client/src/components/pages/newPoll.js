import '../../css/newPoll.css';
import { ADD_POLL } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import React, { useState }  from 'react';

function NewPoll() {

  let user = localStorage.getItem("user_email");

  const [pollState, setPollState] = useState({ title: '', options: [{ name: '', image: '' }], author: user });

  const [addPoll, { error}] = useMutation(ADD_POLL);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPollState({
      ...pollState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPoll({
        variables: { ...pollState },
      });
      console.log(data);

      window.location.reload();
    } catch (err) {
      console.error(err);
    }

    // clear form values
    setPollState({
      title: '',
      options: [{
        name: '',
        image: ''
      }]
    });
  };
  
  return (
    <section id="newPoll">
      {/* <QRCode value= {url} /> */}
      <h1>Create Your Poll!</h1>
      <form
        onSubmit={handleFormSubmit}
        className="form"
      >
        <h2>Poll Title</h2>
        <input
          value={pollState.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="What we are voting on"
          className="pollTitle"
          required
        />
        </form>
        <form
          onSubmit={handleFormSubmit}
          className="optionForm"
        >
          {/* option one */}
          <div className="pollGroup">
          <h2>Option One</h2>
          <input
            value={pollState.options[0].name}
            onChange={handleChange}
            name="option1"
            type="text"
            placeholder="Option One"
            required
          />
          <input
            value={pollState.options[0].image}
            onChange={handleChange}
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
            value={pollState.options[1].name}
            onChange={handleChange}
            name="option2"
            type="text"
            placeholder="Option Two"
            required
          />
          <input
            value={pollState.options[1].image}
            onChange={handleChange}
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
            value={pollState.options[2].name}
            onChange={handleChange}
            name="option3"
            type="text"
            placeholder="Option Three"
            required
          />
          <input
            value={pollState.options[2].image}
            onChange={handleChange}
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
            value={pollState.options[3].name}
            onChange={handleChange}
            name="option4"
            type="text"
            placeholder="Option Four"
            required
          />
          <input
            value={pollState.options[3].image}
            onChange={handleChange}
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
            value={pollState.options[4].name}
            onChange={handleChange}
            name="option5"
            type="text"
            placeholder="Option Five"
            required
          />
          <input
            value={pollState.options[4].image}
            onChange={handleChange}
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
            value={pollState.options[5].name}
            onChange={handleChange}
            name="option6"
            type="text"
            placeholder="Option Six"
            required
          />
          <input
            value={pollState.options[5].image}
            onChange={handleChange}
            name="image6"
            type="text"
            placeholder="Image Six"
            required
          />
          </div>
        {/* submit button */}
          <input 
            class='submitBtn'
            style={{ cursor: 'pointer' }}
            name="Submit"
            type="submit"
            text="Submit"
          />
          {error && (
          <div className="newPollErr">
            Something went wrong...
          </div>
        )}
      </form>

    </section>
  );
};
export default NewPoll;

// Look at 22/15 for the backend connection to the front end. Create a new resolver to create a new