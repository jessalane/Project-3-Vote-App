import React, { useState } from "react";
import '../../css/loginRegister.css';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { checkPassword, validateEmail } from '../../helpers/helpers';

function Register(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);
  const [error, setErrorMessage] = useState('');
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

      Auth.login(data.addUser.token, formState.email, data.addUser.user.username);
      props.handlePageChange("Profile");
    } catch (e) {
      console.error(e);
    }
    if (!validateEmail(formState.email) || !formState.username) {
      setErrorMessage('Email or username is invalid or already in use');
      return;
    }
    if (!checkPassword(formState.password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${formState.username}`
      );
      return;
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