import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    email
    username
    polls {
      _id
    }
  }
}
`;

export const QUERY_POLLS = gql`
query Query($pollId: ID!) {
  polls(pollId: $pollId) {
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