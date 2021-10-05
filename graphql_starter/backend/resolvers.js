const DAILY_TASKS = require("./fake_data");
const resolvers = {
  Query: {
    fetchTasks: () => DAILY_TASKS[0]
  }
};

module.exports = resolvers;
