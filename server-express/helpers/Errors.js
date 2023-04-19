module.exports = class Errors extends Error {
  constructor(status, message) {
    super();
    this.message = { message };
    this.status = status;
    super.name = "Handled";
  }
};
