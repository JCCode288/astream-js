"use server";
import Errors from "@/helpers/Errors";
import prisma from "./Prisma";
import { JwtPayload } from "jsonwebtoken";

interface IQuery {
  username?: string;
  id?: number;
}

interface IUserDTO {
  username?: string;
  email: string;
  password: string;
}

export const findUsers = async ({ username, id }: IQuery) => {
  try {
    let query: IQuery = {};

    if (username) {
      query.username = username;
    }

    if (id) {
      query.id = id;
    }

    let users = await prisma.user.findMany({
      where: query,
      select: {
        username: true,
        Watching: {
          include: {
            _count: {
              select: { comments: true },
            },
          },
        },
      },
    });

    return users;
  } catch (err) {
    throw err;
  }
};

export const findUserById = async (id: number) => {
  try {
    if (!id) throw new Errors(400, "UserId is not defined");

    let user = await prisma.user.findUnique({
      where: { id },
      select: {
        username: true,
        Watching: { orderBy: { created_at: "desc" } },
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) throw new Errors(404, "User is not found");

    return user;
  } catch (err) {
    throw err;
  }
};

export const createUser = async (userData: IUserDTO) => {
  try {
    let { username, password, email } = userData;

    if (!email || !password)
      throw new Errors(400, "Required fields must be filled");

    if (!username) {
      let splittedEmail = email.split("@");
      username = splittedEmail[0];
    }

    let createdUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    let message = `User ${createdUser.username} has been created`;

    return { message };
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (
  userData: IUserDTO,
  id: number,
  token: string
) => {
  try {
    if (!id) throw new Errors(400, "User Id is not defined");
    if (!token) throw new Errors(401, "You are not authenticated");

    let { username, password, email } = userData;

    if (!email || !password)
      throw new Errors(400, "Required fields must be filled");

    if (!username) {
      let splittedEmail = email.split("@");
      username = splittedEmail[0];
    }

    let user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new Errors(404, "User not found");
    }

    let updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        username,
        email,
      },
    });

    return updatedUser;
  } catch (err) {
    throw err;
  }
};
