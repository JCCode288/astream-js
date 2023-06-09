"use server";
import {
  ANIME,
  IAnimeEpisode,
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  ISearch,
} from "@consumet/extensions";
import redis, {
  REDIS_DETAILS,
  REDIS_GENRES,
  REDIS_PREVNEXT,
  REDIS_RECENT,
  REDIS_SEARCH,
  REDIS_STREAM,
  REDIS_TOPAIR,
} from "./redis";
import { episodeTitle, parseTitle } from "@/helpers";

const animeProvider = new ANIME.Gogoanime();

export const getRecentAnime = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];

    let animesCached = await redis.get(REDIS_RECENT + page);
    let animes: ISearch<IAnimeResult>;

    if (animesCached) {
      animes = JSON.parse(animesCached);
      return animes.results;
    }

    animes = await animeProvider.fetchRecentEpisodes(...opts);
    await redis.set(
      REDIS_RECENT + animes.currentPage,
      JSON.stringify(animes),
      "EX",
      60 * 15
    );

    const parsedAnimes = animes.results.map((anime) => {
      let title = parseTitle(anime);
      anime.title = title;

      return anime;
    });

    return parsedAnimes;
  } catch (err) {
    throw err;
  }
};

export const getAnimeDetail = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Anime ID is not provided");
    }

    const cachedDetail = await redis.get(REDIS_DETAILS + id);
    let animeInfo: IAnimeInfo;

    if (cachedDetail) {
      animeInfo = JSON.parse(cachedDetail);
      return animeInfo;
    }

    animeInfo = await animeProvider.fetchAnimeInfo(id);
    await redis.set(
      REDIS_DETAILS + id,
      JSON.stringify(animeInfo),
      "EX",
      60 * 15
    );

    animeInfo.title = parseTitle(animeInfo);
    animeInfo.episodes = animeInfo.episodes?.map((anime) => {
      anime.title = episodeTitle(anime.id);
      return anime;
    });

    return animeInfo;
  } catch (err) {
    throw err;
  }
};

export const getAnimeStream = async (episodeId: string) => {
  try {
    if (!episodeId) {
      throw new Error("Episode ID is not provided");
    }

    let cachedLinks = await redis.get(REDIS_STREAM + episodeId);
    let streamLinks: IEpisodeServer[];

    if (cachedLinks) {
      streamLinks = JSON.parse(cachedLinks);
      return streamLinks;
    }

    streamLinks = await animeProvider.fetchEpisodeServers(episodeId);

    if (!streamLinks.length) {
      throw new Error("Episode not found");
    }

    await redis.set(
      REDIS_STREAM + episodeId,
      JSON.stringify(streamLinks),
      "EX",
      60 * 60 * 24 * 4
    );

    return streamLinks;
  } catch (err) {
    throw err;
  }
};

export const getTopAiring = async (
  page: number | string = 1,
  type?: number
) => {
  try {
    let opts = [+page, type];

    let cachedTop = await redis.get(REDIS_TOPAIR + page);
    let animes: ISearch<IAnimeResult>;

    if (cachedTop) {
      animes = JSON.parse(cachedTop);
      return animes.results;
    }

    animes = await animeProvider.fetchTopAiring(...opts);
    await redis.set(
      REDIS_TOPAIR + animes.currentPage,
      JSON.stringify(animes),
      "EX",
      60 * 60 * 24
    );

    const parsedAnimes = animes.results.map((anime) => {
      let title = parseTitle(anime);
      anime.title = title;

      return anime;
    });

    return parsedAnimes;
  } catch (err) {
    throw err;
  }
};

export const searchAnime = async (query: string, page: number) => {
  try {
    let cachedSearch = await redis.get(REDIS_SEARCH + query + `/${page}`);
    let animes: ISearch<IAnimeResult>;

    if (cachedSearch) {
      animes = JSON.parse(cachedSearch);
      return animes.results;
    }

    animes = await animeProvider.search(query, page);
    await redis.set(
      REDIS_SEARCH + `${query}/${page}`,
      JSON.stringify(animes),
      "EX",
      60 * 60 * 4
    );

    const parsedAnimes = animes.results.map((anime) => {
      let title = parseTitle(anime);
      anime.title = title;

      return anime;
    });

    return parsedAnimes;
  } catch (err) {
    throw err;
  }
};

interface EpisodeStream {
  next?: IAnimeEpisode | undefined;
  prev?: IAnimeEpisode | undefined;
}

export const getPrevNextEpisodes = async (episodeId: string) => {
  try {
    let cachedEpisodes = await redis.get(REDIS_PREVNEXT + episodeId);
    let episodes: EpisodeStream;

    if (cachedEpisodes) {
      episodes = JSON.parse(cachedEpisodes);
      return episodes;
    }

    let episodeIdSplitted = episodeId.split("-");
    let episodeNow = episodeIdSplitted[episodeIdSplitted.length - 1];

    let animeId = await animeProvider.fetchAnimeIdFromEpisodeId(episodeId);

    let animeEpisodes = (
      await animeProvider.fetchAnimeInfo(animeId)
    ).episodes?.filter((el) => {
      if ((el.number - 1).toString() === episodeNow) return el;
      if ((el.number + 1).toString() === episodeNow) return el;
    });

    episodes = {};

    if (animeEpisodes?.length) {
      if (+episodeNow !== 1) {
        episodes.prev = animeEpisodes[0];
      } else {
        episodes.next = animeEpisodes[0];
      }

      if (animeEpisodes[1]) episodes.next = animeEpisodes[1];
    }

    await redis.set(
      REDIS_PREVNEXT + episodeId,
      JSON.stringify(episodes),
      "EX",
      60 * 60 * 24
    );

    return episodes;
  } catch (err) {
    throw err;
  }
};

export const getAnimesByGenres = async (genres: string, page: number = 1) => {
  try {
    let cachedAniGenres = await redis.get(`${REDIS_GENRES}${genres}/${page}`);
    let aniGenres: ISearch<IAnimeResult>;

    if (cachedAniGenres) {
      aniGenres = JSON.parse(cachedAniGenres);
      return aniGenres;
    }

    aniGenres = await animeProvider.fetchGenreInfo(genres, +page);
    await redis.set(
      `${REDIS_GENRES}${genres}/${page}`,
      JSON.stringify(aniGenres),
      "EX",
      60 * 15
    );

    aniGenres.results = aniGenres.results.map((anime) => {
      let title = parseTitle(anime);
      anime.title = title;

      return anime;
    });

    return aniGenres;
  } catch (err) {
    throw err;
  }
};
