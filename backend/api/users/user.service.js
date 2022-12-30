const userModel = require("./user.model.js");

const userServes = {
  create: (data) => {
    return userModel.Users.create(data);
  },
  list: (email) => {
    return userModel.Users.findOne({ email: email });
  },
  getUserById: (id) => {
    return userModel.Users.findById(id);
  },
  getUsers: async () => {
    return await userModel.Users.find();
  }
};

module.exports = { userServes };