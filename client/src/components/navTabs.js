import React from 'react';
import '../css/nav.css';
import Auth from '../utils/auth';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange, props }) {
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('id_token');
  let logged = '';
  if(token !== null) {
    logged = true;
  } else {
    logged = false;
  }

  return (
    <div id="nav">
    {!logged ? (
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
    ) : (
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
          href="#logout"
          onClick={() => { handlePageChange('Logout'); Auth.logout(); }}
          className={currentPage === 'Logout' ? 'active' : 'inactive'}
        >
          Logout
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
      <li> 
        You are logged in as {username}.
      </li>      
      </ul>
    )}
    </div>




  );
}




export default NavTabs;
