import '../../css/newPoll.css';
import { ADD_POLL } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import React, {
  useState,
  useEffect
} from 'react';
import Uploader from './uploader';




function NewPoll() {
  // uploader 
  const [file, setFile] = useState(null);
  const [inputId, setInputId] = useState(0);
  // TODO: set state to true once submitted
  // const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (file !== null) {
      const newValue = {};
      newValue.name = pollState.options[inputId].name;
      newValue.image = file?.filesUploaded[0]?.url

      const oldOptions = [...pollState.options];
      oldOptions.splice(parseInt(inputId), 1, newValue);


      setPollState({
        ...pollState,
        options: [...oldOptions]
      })
    };
  }, [file]);

  const onButtonClick = (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    setInputId(id)

    Uploader({ setFile, file })
  };

  let user = localStorage.getItem("user_email");

  const [pollState, setPollState] = useState({ title: '', options: [{ name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }, { name: '', image: '' }], author: user });

  const [addPoll, { error }] = useMutation(ADD_POLL);
  const [titleState, setTitleState] = useState();
  const handleTitleChange = (event) => {
    
    const { title, value } = event.target;

    setTitleState({
      ...titleState,
      [title]: value,
    });
  };

  const handleChange = (event) => {
    const { id } = event.target.dataset;
    const { name, value } = event.target;
    const newValue = {};
    if (name === "name") {
      newValue.name = value;
      newValue.image = pollState.options[id].image;
    } else if (name === "title") {
      // TODO: title change
    }
    const oldOptions = [...pollState.options];
    oldOptions.splice(parseInt(id), 1, newValue);

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
          onChange={handleTitleChange}
          name="title"
          type="text"
          placeholder="What we are voting on"
          className="pollTitle"
          
        />
      </form>
      <form
        onSubmit={handleFormSubmit}
        className="optionForm"
      >
        {pollState.options.map((option, i) => (
          <div key={i}
            className="pollGroup">
            <h2>Option {i + 1} </h2>
            <input
              value={option.name}
              onChange={handleChange}
              data-id={i}
              name="name"
              type="text"
              placeholder={"option " + (i + 1)}
            
            />
            {option.image === "" ? <input 
              value= "Upload a Photo"
              onClick={onButtonClick}
              data-id={i}
              name="image"
              type="button"
              title="Upload a photo"
              placeholder={"image " + (i + 1)}
            

            /> : <img src={option.image} alt="a beatiful person" width="300" height="400"/>}

          </div>
        ))}
        {error && (
          <div className="newPollErr">
            Something went wrong...
          </div>
        )}
        {/* submit button */}
        <input
          class='submitBtn'
          style={{ cursor: 'pointer' }}
          // onClick={handleFormSubmit}
          name="Submit"
          type="submit"
          text="Submit"
        />
        {error && (
          <div className="newPollErr">
            Something went wrong...
          </div>)}
      </form>

    </section>


  );
};
export default NewPoll;

// Look at 22/15 for the backend connection to the front end. Create a new resolver to create a new