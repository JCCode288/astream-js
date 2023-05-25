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
  host: process.env.REDIS_HOST || "127.0.0.1", // Redis host
  password: process.env.REDIS_PASSWORD || "",
};

const redis = new Redis(config);

export default redis;
