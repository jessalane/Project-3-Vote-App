import '../css/home.css';

import React, { useState } from 'react';
import NavTabs from './navTabs';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Polls from './pages/poll';
import Profile from './pages/profile';
import Footer from './footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Register') {
      return <Register />;
    }
    if (currentPage === 'Polls') {
      return <Polls />;
    }
    return <Profile />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
