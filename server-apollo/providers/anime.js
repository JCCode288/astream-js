const { ANIME } = require("@consumet/extensions");
const redis = require("../config/redis");
const gogoAnime = new ANIME.Gogoanime();
const redisKeys = {
  animesTop: "animes:top-animes",
  animesRecent: "animes:recent-animes",
  animeByIdInfo: "animes:get-one-info",
  animeByIdEpisode: "animes:get-one-episode",
  searchAnimes: "animes:keyword",
};

module.exports = class AnimeProvider {
  static async topAnimes() {
    try {
      const topAni = await redis.get(redisKeys.animesTop);

      if (!topAni) {
        let animes = await gogoAnime.fetchTopAiring();

        await redis.set(redisKeys.animesTop, JSON.stringify(animes));
        await redis.expire(redisKeys.animesTop, 60 * 60 * 4);

        return animes;
      } else {
        return JSON.parse(topAni);
      }
    } catch (err) {
      throw err;
    }
  }

  static async recentAnimes() {
    try {
      const recentAni = await redis.get(redisKeys.animesRecent);

      if (!recentAni) {
        let animes = await gogoAnime.fetchRecentEpisodes();

        await redis.set(redisKeys.animesRecent, JSON.stringify(animes));
        await redis.expire(redisKeys.animesRecent, 60 * 20);

        return animes;
      } else {
        return JSON.parse(recentAni);
      }
    } catch (err) {
      throw err;
    }
  }

  static async animeByIdInfo(_, { animeId }) {
    try {
      let id = animeId.id;
      const animeById = await redis.get(`${redisKeys.animeByIdInfo}:${id}`);

      if (!animeById) {
        let anime = await gogoAnime.fetchAnimeInfo(id);

        await redis.set(
          `${redisKeys.animeByIdInfo}:${id}`,
          JSON.stringify(anime)
        );
        await redis.expire(`${redisKeys.animeByIdInfo}:${id}`, 60 * 60 * 4);

        return anime;
      } else {
        return JSON.parse(animeById);
      }
    } catch (err) {
      throw err;
    }
  }

  static async fetchAnimeByIdEpisode(_, { episodeId }) {
    try {
      let id = episodeId.id;

      let episode = await redis.get(`${redisKeys.animeByIdEpisode}:${id}`);

      if (!episode) {
        let anime = await gogoAnime.fetchEpisodeSources(id);
        console.log(anime);

        await redis.set(
          `${redisKeys.animeByIdEpisode}:${id}`,
          JSON.stringify(anime)
        );
        await redis.expire(`${redisKeys.animeByIdEpisode}:${id}`, 60 * 60 * 4);

        return anime;
      } else {
        let res = JSON.parse(episode);

        return res;
      }
    } catch (err) {
      throw err;
    }
  }

  static async fetchEpisodeServers(_, { episodeId }) {
    try {
      let id = episodeId.id;

      let episode = await redis.get(`${redisKeys.animeByIdEpisode}:${id}`);

      if (!episode) {
        let anime = await gogoAnime.fetchEpisodeServers(id);

        await redis.set(
          `${redisKeys.animeByIdEpisode}:${id}`,
          JSON.stringify(anime)
        );
        await redis.expire(`${redisKeys.animeByIdEpisode}:${id}`, 60 * 60 * 4);

        return anime;
      } else {
        let res = JSON.parse(episode);

        return res;
      }
    } catch (err) {
      throw err;
    }
  }

  static async searchAnimes(_, { query }) {
    try {
      let { searchQuery } = query;

      console.log(searchQuery);

      let searched = await redis.get(
        `${redisKeys.searchAnimes}:${searchQuery}`
      );

      if (!searched) {
        let animes = await gogoAnime.search(searchQuery);

        await redis.set(
          `${redisKeys.searchAnimes}:${searchQuery}`,
          JSON.stringify(animes)
        );
        await redis.expire(
          `${redisKeys.searchAnimes}:${searchQuery}`,
          60 * 60 * 4
        );

        return animes;
      } else {
        let res = JSON.parse(searched);

        return res;
      }
    } catch (err) {
      throw err;
    }
  }
};
