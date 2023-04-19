const Errors = require("../helpers/Errors");
const Hash = require("../helpers/Hash");
const Token = require("../helpers/Token");

const { User } = require("../models").default;

module.exports = class UserProvider {
  static async users() {
    try {
      let users = await User.find({ username: "jambu" });
      return users;
    } catch (err) {
      throw err;
    }
  }
  static async login(_, { loginCred }) {
    try {
      let { email, password } = loginCred;

      if (!email || !password) {
        throw new Errors(500, "Internal Server Error");
      }

      let user = await User.findOne({ email });

      if (!user) {
        throw new Errors(400, "Wrong email/password");
      }

      let valid = Hash.verify(password, user.password);

      if (!valid) {
        throw new Errors(400, "Wrong email/password");
      }

      let access_token = Token.create({ id: user.id });

      return { access_token, username: user.username };
    } catch (err) {
      throw err;
    }
  }
  static async register(_, { registerCred }) {
    try {
      let { email, password, username } = registerCred;

      if (!email || !password || !username) {
        throw new Errors(400, "All fields must be filled");
      }

      let user = await User.find({ email });

      if (user.length) {
        throw new Errors(400, "Email has already registered");
      }

      let newUser = new User({
        email,
        password,
        username,
      });

      await newUser.save();

      let access_token = Token.create({ id: newUser.id });

      return { access_token, username: newUser.username };
    } catch (err) {
      throw err;
    }
  }
};
