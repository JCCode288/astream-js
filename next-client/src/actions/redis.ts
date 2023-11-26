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

export class RedisService {
  private static readonly redis_client = new Redis(config);

  static async set(key: string, animes: any, seconds: number = 60 * 15) {
    try {
      await this.redis_client.set(key, JSON.stringify(animes), "EX", seconds);
    } catch (err) {
      throw err;
    }
  }

  static async get(key: string) {
    try {
      const animes = await this.redis_client.get(key);

      if (!animes) return null;

      return JSON.parse(animes);
    } catch (err) {
      throw err;
    }
  }
}

export const RedisKey = {
  RECENT: "animes/recent/",
  TOPAIR: "animes/topAiring/",
  DETAILS: "animes/details/",
  SEARCH: "animes/search/",
  PREVNEXT: "animes/animeId/",
  STREAM: "animes/stream/",
  GENRES: "animes/byGenres/",
};
