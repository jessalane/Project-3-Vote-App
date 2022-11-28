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
import NewPoll from './pages/newPoll';
import UserInput from './pages/userInput';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function PortfolioContainer() {

  // const reactRouter = Reactrouter;
  const [currentPage, setCurrentPage] = useState('Home');
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(file?.filesUploaded[0]?.url)
    // Redirects the user to home after uploading a file
    setCurrentPage('Home')
    // TODO: code here to send to apollo

  }, [file]);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Uploader') {
      return <Uploader setFile={setFile} file={file} />;
    }
    if (currentPage === 'Login') {
      return <Login currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Register') {
      return <Register currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Polls') {
      return <Polls />;
    }
    if (currentPage === 'Logout') {
      return <Home />;
    }
    else {
      return <Profile />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
      <NavTabs 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      />
      <Routes>
      <Route
        path="/newpoll/:id"
        element={<NewPoll />}
      />
      <Route
        path="/userinput/:id"
        element={<UserInput />}
      />
    </Routes>
      {renderPage()}
      <Footer />
    </div>
    
    </Router>
  );
}
