import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const QUERY_SAVED_BOOK_IDS = gql`
  query {
    me {
      savedBooks {
        bookId
      }
    }
  }
`;
