if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(+process.env.SALT);

module.exports = class Hash {
  static create(password) {
    return bcrypt.hashSync(password, salt);
  }
  static verify(password, hashed) {
    return bcrypt.compareSync(password, hashed);
  }
};
