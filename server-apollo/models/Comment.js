"use strict";

module.exports = (mongoose) => {
  const newSchema = new mongoose.Schema(
    {
      comment: {
        type: String,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );
  const Comment = mongoose.model("Comment", newSchema);
  return Comment;
};
