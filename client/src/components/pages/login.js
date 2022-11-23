import React, { useState } from "react";
import '../../css/loginRegister.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { checkPassword, validateEmail } from '../../helpers/helpers';
import Auth from '../../utils/auth';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);
  const [error, setErrorMessage] = useState('');
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

      Auth.login(data.login.token, formState.email, data.login.user.username);
      props.handlePageChange("Profile");
    } catch (e) {
      console.error(e);
    }

    if (!validateEmail(formState.email) || !formState.userName) {
      setErrorMessage('Email is invalid or incorrect password');
      return;
    }
    if (!checkPassword(formState.password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${formState.userName}`
      );
      return;
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
      username: ''
    });
  };

  return (
    <section id="loginPage">
        <h1>login to your account</h1>
        <form 
          onSubmit={handleFormSubmit}
          target="_blank"
          method="POST"
          className="form"
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
      {error && (
        <div>
            <p className="error-text">{error}</p>
        </div>
      )}
    </section>
  );
};

export default Login;