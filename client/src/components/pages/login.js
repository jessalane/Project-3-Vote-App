import React, { useState } from "react";
import '../../css/loginRegister.css';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';


function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section id="loginPage">
      {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
      <div>
        <h1>login to your account</h1>
        <form 
          onSubmit={handleFormSubmit}
          target="_blank"
          method="POST"
          class="form"
      >
          <input
            value={formState.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            value={formState.password}
            onChange={handleChange}
            name="password"
            type="text"
            placeholder="********"
            required
          />
          <button 
          style={{ cursor: 'pointer' }}
          type="submit"
          >
              Submit
          </button>
        </form> 
      </div>
    )}
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Login;