import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import Errors from "@/helpers/Errors";

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  dotenv.config();
}

export interface IToken {
  id: number;
  email: string;
}

class Token {
  protected secret = process.env.SECRET_JWT || "jwt_secret";
  private readonly jwt = jsonwebtoken;
  constructor() {}

  create(payload: IToken): string {
    const token = this.jwt.sign(payload, this.secret, { expiresIn: "24h" });

    return token;
  }

  verify(token: string) {
    let payload = this.jwt.verify(token, this.secret);

    return payload;
  }
}

export default new Token();
