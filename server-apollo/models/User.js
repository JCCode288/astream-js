"use strict";

const Hash = require("../helpers/Hash");

module.exports = (mongoose) => {
  const newSchema = new mongoose.Schema(
    {
      username: {
        type: String,
      },
      email: {
        type: String,
        unique: "You are already registered",
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );

  newSchema.pre("save", function (next) {
    this.password = Hash.create(this.password);
    next();
  });

  const User = mongoose.model("User", newSchema);
  return User;
};
