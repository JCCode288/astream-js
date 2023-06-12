"use server";

import Errors from "@/helpers/Errors";
import prisma from "./Prisma";

interface IWatchingDTO {
  episode_title: string;
  episode_number: number;
  user_id: number;
}

export const getWatchingById = async (animeId: string) => {
  let watching = await prisma.watching.findUnique({
    where: { episode_title: animeId },
    include: {
      comments: true,
    },
  });

  if (!watching) throw new Errors(404, "Watching not found");

  return watching;
};

export const createWatching = async (
  watchingData: IWatchingDTO,
  token: string
) => {
  try {
    if (!token) {
      throw new Errors(401, "You are unauthenticated");
    }

    let { episode_title, episode_number, user_id } = watchingData;

    if (!episode_title || !episode_number || !user_id) {
      throw new Errors(400, "All required fields must be filled");
    }

    let createdWatching = await prisma.watching.create({
      data: watchingData,
    });

    let message = `${createdWatching.episode_title} has been added to watching list`;

    return { message };
  } catch (err) {
    throw err;
  }
};

export const updateWatching = async (
  watchingData: IWatchingDTO,
  id: number,
  token: string
) => {
  try {
    if (!token) {
      throw new Errors(401, "You are unauthenticated");
    }

    let { episode_title, episode_number, user_id } = watchingData;

    if (!episode_title || !episode_number || !user_id) {
      throw new Errors(400, "All required fields must be filled");
    }

    let updatedWatching = await prisma.watching.update({
      where: { id },
      data: watchingData,
    });

    let message = `${updatedWatching.episode_title} has been updated`;

    return { message };
  } catch (err) {
    throw err;
  }
};
