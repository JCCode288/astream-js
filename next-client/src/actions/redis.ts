import { Redis } from "ioredis";
import dotenv from "dotenv";

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  dotenv.config();
}
const config = {
  port: Number(process.env.REDIS_PORT) || 6379, // Redis port
  host: process.env.REDIS_HOST || "localhost", // Redis host
  username: process.env.REDIS_USERNAME || "redis", // needs Redis >= 6
  password: process.env.REDIS_PASSWORD || "password",
  db: 0, // Defaults to 0
};

const redis = new Redis(config);

export default redis;
