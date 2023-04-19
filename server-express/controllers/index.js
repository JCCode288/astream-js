const models = require("../models").default;
const { User, Comment } = models;

module.exports = class Controller {
  static async getUsers(req, res, next) {
    try {
      console.log(User);
      let users = await User.find();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
};
