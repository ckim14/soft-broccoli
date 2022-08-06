const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [Authors]
    description: String
    title: String
    image: String
    link: String
  }

  type Authors {
    _id: ID
    name: String
    books: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:String, description: String, title: String, image: String, link: String): User
    removeBook: (bookID: String!): User
  }
`;

module.exports = typeDefs;
