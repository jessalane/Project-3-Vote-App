import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POLL = gql`
mutation addPoll($pollId: ID!, $createdAt: String!, $author: String!, $title: String!) {
  addPoll(pollId: $pollId, createdAt: $createdAt, author: $author, title: $title) {
    _id
    author
    createdAt
    title
    options {
      image
      name
      votes {
        count
      }
    }
  }
}
`;

export const ADD_VOTE = gql`
mutation addVote($voteId: ID!, $count: String) {
  addVote(voteId: $voteId, count: $count) {
    count
  }
}
`;