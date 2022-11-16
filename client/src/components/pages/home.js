import React from 'react';


function Home() {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to poll!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of polls you can vote on:</h2>
        {/* {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {pollList.map((poll) => {
              return (
                <li key={poll._id}>
                  <Link to={{ pathname: `/poll/${poll._id}` }}>
                    {poll.tech1} vs. {poll.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )} */}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new poll?</h2>
        {/* <Link to="/poll">
          <button className="btn btn-lg btn-danger">Create poll!</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;