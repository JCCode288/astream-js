"use server";

import {
  ANIME,
  IAnimeEpisode,
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  ISearch,
} from "@consumet/extensions";
import redis from "./redis";

let animeKeys = {
  recent: "animes/recent/",
  topAir: "animes/topAiring/",
  details: "animes/details/",
  search: "animes/search/",
  prevNext: "animes/animeId/",
  stream: "animes/stream/",
};

const animeProvider = new ANIME.Gogoanime();

export const getRecentAnime = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];

    let animesCached = await redis.get(animeKeys.recent + page);
    let animes: ISearch<IAnimeResult>;

    if (animesCached) {
      animes = JSON.parse(animesCached);
      return animes.results;
    }

    animes = await animeProvider.fetchRecentEpisodes(...opts);
    await redis.set(
      animeKeys.recent + animes.currentPage,
      JSON.stringify(animes),
      "EX",
      60 * 15
    );

    return animes.results;
  } catch (err) {
    throw err;
  }
};

export const getAnimeDetail = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Anime ID is not provided");
    }

    const cachedDetail = await redis.get(animeKeys.details + id);
    let animeInfo: IAnimeInfo;

    if (cachedDetail) {
      animeInfo = JSON.parse(cachedDetail);
      return animeInfo;
    }

    animeInfo = await animeProvider.fetchAnimeInfo(id);
    await redis.set(
      animeKeys.details + id,
      JSON.stringify(animeInfo),
      "EX",
      60 * 15
    );

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

    let cachedLinks = await redis.get(animeKeys.stream + episodeId);
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
      animeKeys.stream + episodeId,
      JSON.stringify(streamLinks),
      "EX",
      60 * 60 * 24 * 7
    );

    return streamLinks;
  } catch (err) {
    throw err;
  }
};

export const getTopAiring = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];

    let cachedTop = await redis.get(animeKeys.topAir + page);
    let animes: ISearch<IAnimeResult>;

    if (cachedTop) {
      animes = JSON.parse(cachedTop);
      return animes.results;
    }

    animes = await animeProvider.fetchTopAiring(...opts);
    await redis.set(
      animeKeys.topAir + animes.currentPage,
      JSON.stringify(animes),
      "EX",
      60 * 60 * 24
    );

    return animes.results;
  } catch (err) {
    throw err;
  }
};

export const searchAnime = async (query: string) => {
  try {
    let cachedSearch = await redis.get(animeKeys.search + query);
    let animes: ISearch<IAnimeResult>;

    if (cachedSearch) {
      animes = JSON.parse(cachedSearch);
      return animes.results;
    }

    animes = await animeProvider.search(query);
    await redis.set(
      animeKeys.search + query,
      JSON.stringify(animes),
      "EX",
      60 * 60 * 4
    );

    return animes.results;
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
    let cachedEpisodes = await redis.get(animeKeys.prevNext + episodeId);
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
      animeKeys.prevNext + episodeId,
      JSON.stringify(episodes),
      "EX",
      60 * 60 * 24
    );

    return episodes;
  } catch (err) {
    throw err;
  }
};
