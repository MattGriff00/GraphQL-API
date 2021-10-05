const { gql } = require("apollo-server");

const typeDefs = gql`
  type Tasks {
    task: String
    id: ID
    completed: Boolean
  }
  type Query {
    fetchTasks: Tasks
  }
`;

module.exports = typeDefs;