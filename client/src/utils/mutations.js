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

export const ADD_SUBMISSION = gql`
mutation addSubmission($user: String!, $dressedAs: String!, $photo: String!) {
  addSubmission(user: $user, dressedAs: $dressedAs, photo: $photo) {
    _id
    user
    dressedAs
    photo
  }
}
`; 

// ADD_SUBMISSION -- logic to add a userName, dressedAs, and photo

// export const ADD_POLL = gql`
//   mutation logic here
// `;

// export const ADD_VOTE = gql`
//   mutation logic here
// `;