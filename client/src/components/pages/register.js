import React, { useState } from "react";
import '../../css/loginRegister.css';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


function Register(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      props.handlePageChange("Profile");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="registerPage">
      <h1>register an account</h1>
          <form 
            target="_blank"
            method="POST"
            className="form"
        >
            <input
              value={formState.username}
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username"
              required
            />
            <input
              value={formState.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="email"
              required
            />
            <input
              value={formState.password}
              name="password"
              onChange={handleChange}
              type="text"
              placeholder="password"
              required
            />
            <button 
            type="submit" 
            onClick={handleFormSubmit}
            >
                Submit
            </button>
          </form>
      {error && (
        <div>
            <p className="error-text">{error}</p>
        </div>
      )}
    </section>
  );
};

export default Register;