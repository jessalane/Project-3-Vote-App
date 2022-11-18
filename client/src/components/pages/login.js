import React, { useState } from "react";
import '../../css/loginRegister.css';
import { validateEmail } from '../../helpers/helpers';


function Login() {

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {
            target
        } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } if (inputType === 'username') {
            setUserName(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !username) {
            setErrorMessage('Email or Username is invalid');
            return;
        }

        setUserName('');
        setEmail('');
        setPassword('');
    };

  return (
    <section id="loginPage">
        <h1>login to your account</h1>
      <form 
        target="_blank"
        method="POST"
        class="form"
    >
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />
        <input
          value={username}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          required
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
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
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Login;