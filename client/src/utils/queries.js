import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query users {
    users {
        username
        email
    }
  }
`;

export const QUERY_POLLS = gql`
query polls($author: String) {
    polls(author: $author) {
        _id
        createdAt
        author
        title
        [options]
    }
  }
`;

export const QUERY_VOTES = gql`
  query votes
`;
