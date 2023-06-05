"use server";

interface IQuery {
  username?: string;
  id?: number;
}

import prisma from "./Prisma";

export const findUser = ({ username, id }: IQuery) => {
  try {
    let query: IQuery = {};

    if (username) {
      query.username = username;
    }

    if (id) {
      query.id = id;
    }

    let users = prisma.user.findMany({ where: query });

    return users;
  } catch (err) {
    throw err;
  }
};
