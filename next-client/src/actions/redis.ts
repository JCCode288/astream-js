import { Redis } from "ioredis";
import dotenv from "dotenv";

if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "development"
) {
  dotenv.config();
}

const config = {
  port: Number(process.env.REDIS_PORT) || 6379,
  host: process.env.REDIS_HOST || "127.0.0.1",
  password: process.env.REDIS_PASSWORD || "",
};

const redis = new Redis(config);

export default redis;

export const REDIS_RECENT = "animes/recent/";
export const REDIS_TOPAIR = "animes/topAiring/";
export const REDIS_DETAILS = "animes/details/";
export const REDIS_SEARCH = "animes/search/";
export const REDIS_PREVNEXT = "animes/animeId/";
export const REDIS_STREAM = "animes/stream/";
export const REDIS_GENRES = "animes/byGenres/";
