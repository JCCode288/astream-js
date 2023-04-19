'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    username: {
      type: String
    },
    password: {
      type: String
    },
    email: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const User = mongoose.model('User', newSchema);
  return User;
};