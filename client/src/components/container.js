import '../css/home.css';

import React, { useState, useEffect } from 'react';
import NavTabs from './navTabs';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Polls from './pages/poll';
import Profile from './pages/profile';
import Footer from './footer'
import Uploader from './pages/uploader';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(file?.filesUploaded[0]?.url)
    setCurrentPage ('Home')
// TODO: code here to send to apollo
// {file ? (
//   <img

//     src={file.filesUploaded[0]?.url}
//   />
// ) : (
//   "No file has been chosen yet."
// )}
  }, [file]);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Uploader') {
      return <Uploader setFile = {setFile} file = {file} />;
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
