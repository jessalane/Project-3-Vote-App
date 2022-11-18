import React from 'react';
import '../css/nav.css';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  return (
    <div id="nav">
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'active' : 'inactive'}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'active' : 'inactive'}
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="#register"
          onClick={() => handlePageChange('Register')}
          className={currentPage === 'Register' ? 'active' : 'inactive'}
        >
          Register
        </a>
      </li>
      <li>
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'active' : 'inactive'}
        >
          Profile
        </a>
      </li>
      <li>
        <a
          href="#polls"
          onClick={() => handlePageChange('Polls')}
          className={currentPage === 'Polls' ? 'active' : 'inactive'}
        >
          Polls
        </a>
      </li>
    
      <li>
        <a
          href="#uploader"
          onClick={() => handlePageChange('Uploader')}
          className={currentPage === 'Uploader' ? 'active' : 'inactive'}
        >
          Uploader
        </a>
      </li>
      </ul>
    </div>
  );
}

export default NavTabs;
