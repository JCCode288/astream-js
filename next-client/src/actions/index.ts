"use server";

import {
  ANIME,
  IAnimeEpisode,
  IAnimeResult,
  ISearch,
} from "@consumet/extensions";

const animeProvider = new ANIME.Gogoanime();

export const getRecentAnime = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];
    let animes: ISearch<IAnimeResult> = await animeProvider.fetchRecentEpisodes(
      ...opts
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

    let animeInfo = await animeProvider.fetchAnimeInfo(id);

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

    let streamLinks = await animeProvider.fetchEpisodeServers(episodeId);

    if (!streamLinks.length) {
      throw new Error("Episode not found");
    }

    return streamLinks;
  } catch (err) {
    throw err;
  }
};

export const getTopAiring = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];
    let animes: ISearch<IAnimeResult> = await animeProvider.fetchTopAiring(
      ...opts
    );

    return animes.results;
  } catch (err) {
    throw err;
  }
};

export const searchAnime = async (query: string) => {
  try {
    let animes = await animeProvider.search(query);

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
    let episodeIdSplitted = episodeId.split("-");
    let episodeNow = episodeIdSplitted[episodeIdSplitted.length - 1];
    let animeIdx = episodeIdSplitted.findIndex((el) => {
      return el.match(/(episode)/i);
    });
    let animeId = episodeIdSplitted.slice(0, animeIdx).join("-");

    let animeEpisodes = (
      await animeProvider.fetchAnimeInfo(animeId)
    ).episodes?.filter((el) => {
      if ((el.number - 1).toString() === episodeNow) return el;
      if ((el.number + 1).toString() === episodeNow) return el;
    });

    let episodes: EpisodeStream = {};

    if (animeEpisodes) {
      episodes.prev = animeEpisodes[0];
      episodes.next = animeEpisodes[1];
    }

    return episodes;
  } catch (err) {
    throw err;
  }
};
