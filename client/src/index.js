import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// 1
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';
  
  // 2
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000'
  });
  
  // 3
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
  

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
   document.getElementById('root')
);
