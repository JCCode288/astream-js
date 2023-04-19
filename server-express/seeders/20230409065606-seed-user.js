"use strict";

const Hash = require("../helpers/Hash");

module.exports = {
  up: async (models, mongoose) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.Test.bulkWrite([
        {
          insertOne: {
            document: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    */
    let users = require("../mock_data/users.json");
    users.map((el) => {
      el.password = Hash.create(el.password);
      el.updatedAt = new Date();
      el.createdAt = new Date();
      return el;
    });

    await models.User.insertMany(users);
  },

  down: async (models, mongoose) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.Test.bulkWrite([
        {
          deleteOne: {
            filter: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    */
    await models.User.deleteMany();
  },
};
