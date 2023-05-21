"use server";

import { ANIME, IAnimeResult, ISearch } from "@consumet/extensions";

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
