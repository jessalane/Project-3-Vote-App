import '../../css/newPoll.css';
import { ADD_POLL } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import React, { useState }  from 'react';

function NewPoll() {

  let user = localStorage.getItem("user_email");

  const [pollState, setPollState] = useState({ title: '', options: [{ name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }], author: user });

  const [addPoll, { error}] = useMutation(ADD_POLL);

  const handleChange = (event) => {
    const { id } = event.target.dataset;
    const { name, value } = event.target;
    const newValue = {};
    if(name === "name") {
      newValue.name = value;
      newValue.image = pollState.options[id].image;
    } else if(name === "title") {
      
    }
    else {
      newValue.name = pollState.options[id].name;
      newValue.image = value;
    }
    const oldOptions = [...pollState.options];
    oldOptions.splice(parseInt(id), 1, newValue);
    console.log(oldOptions);

    setPollState({
      ...pollState,
      options: [...oldOptions]
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
          {pollState.options.map((option, i) => (
            <div key={i}
            className="pollGroup">
              <h2>Option {i+1} </h2>
            <input
            value={option.name}
            onChange={handleChange}
            data-id={i}
            name="name"
            type="text"
            placeholder={"option " + (i+1)}
            required
          />
          <input
          value={option.image}
          onChange={handleChange}
          data-id={i}
          name="image"
          type="text"
          placeholder={"image " + (i+1)}
          required
          />
        </div>
          ))}
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