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
    let { comment, user_id, watching_id, rating } = commentData;

    if (!comment) throw new Errors(400, "Comment is empty");

    if (!watching_id || !user_id)
      throw new Errors(400, "Watching Id or User Id is undefined");

    let createdComment = await prisma.comment.create({
      data: commentData,
    });

    let message = `comment has been added`;

    return { message };
  } catch (err) {
    throw err;
  }
};

export const editComment = async (commentData: ICommentDTO, id: number) => {
  try {
    let { comment, user_id, watching_id, rating } = commentData;

    if (!comment) throw new Errors(400, "Comment is empty");

    if (!watching_id || !user_id)
      throw new Errors(400, "Watching Id or User Id is undefined");

    let updatedComment = await prisma.comment.update({
      where: { id },
      data: commentData,
    });

    let message = `Your comment has been updated`;

    return { message };
  } catch (err) {
    throw err;
  }
};
