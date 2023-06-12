"use server";

import Errors from "@/helpers/Errors";
import prisma from "./Prisma";

interface ICommentDTO {
  comment: string;
  rating?: number;
  watching_id: number;
  user_id: number;
}

export const createComment = async (commentData: ICommentDTO) => {
  try {
    let { comment, watching_id, rating } = commentData;

    if (!comment) throw new Errors(400, "Comment is empty");

    if (!watching_id) throw new Errors(400, "Watching Id is undefined");

    let createdComment = await prisma.comment.create({
      data: commentData,
    });

    let message = `comment has been added`;

    return { message };
  } catch (err) {
    throw err;
  }
};
