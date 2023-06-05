import * as bcryptjs from "bcryptjs";
import dotenv from "dotenv";

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  dotenv.config();
}

class Bcrypt {
  private readonly bcrypt: typeof bcryptjs;
  private readonly salt: string;
  constructor() {
    this.bcrypt = bcryptjs;
    this.salt = this.createSalt(Number(process.env.SECRET_BCRYPT) || 7);
  }

  createSalt(secret: number) {
    let salt: string = this.bcrypt.genSaltSync(secret);
    return salt;
  }

  async hash(password: string) {
    try {
      let pass = await this.bcrypt.hash(password, this.salt);

      return pass;
    } catch (err) {
      throw err;
    }
  }

  async verify(password: string, hashed: string) {
    try {
      let valid = await this.bcrypt.compare(password, hashed);

      return valid;
    } catch (err) {
      throw err;
    }
  }
}

export default new Bcrypt();
