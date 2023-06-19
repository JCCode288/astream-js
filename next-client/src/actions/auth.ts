"use server";

import { signInWithPopup } from "firebase/auth";
import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";
import prisma from "./Prisma";
import Bcrypt from "./Bcrypt";
import { createUser } from "./users";
import Token from "./Token";
import Errors from "@/helpers/Errors";

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  dotenv.config();
}

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

export async function loginBack(googleToken: any) {
  try {
    const client = new OAuth2Client(CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();

    let { email, given_name, family_name }: any = payload;

    let user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      const password = "defaultPassword: " + btoa(email);

      await createUser({
        email,
        password,
        username: given_name + family_name,
      });

      user = await prisma.user.findFirst({ where: { email } });

      if (!user) {
        throw new Errors(500, "Something is wrong");
      }
    }

    let payloadToken = { id: user.id, email: user.email };

    const access_token = Token.create(payloadToken);
    const username = user.username;

    return { access_token, username };
  } catch (err) {
    throw err;
  }
}
