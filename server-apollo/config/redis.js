const Redis = require("ioredis");

const redisCredential = {
  port: 6379,
  host: "127.0.0.1",
};

if (process.env.NODE_ENV === "production") {
  redisCredential.password = process.env.REDIS_PASS;
  redisCredential.port = process.env.REDIS_PORT;
  redisCredential.host = process.env.REDIS_HOST;
}

const redis = new Redis(redisCredential);

module.exports = redis;
