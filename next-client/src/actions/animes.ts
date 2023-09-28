"use server";
import {
  ANIME,
  IAnimeEpisode,
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  ISearch,
} from "@consumet/extensions";
import { RedisKey, RedisService } from "./redis";

import { episodeTitle, parseTitle } from "@/helpers";

const animeProvider = new ANIME.Gogoanime();

export const getRecentAnime = async (page: number = 1, type?: number) => {
  try {
    let opts = [page, type];

    let animes: ISearch<IAnimeResult> = await RedisService.get(
      RedisKey.RECENT + page
    );

    if (!animes) {
      animes = await animeProvider.fetchRecentEpisodes(...opts);

      animes.results = animes.results.map((anime) => {
        let title = parseTitle(anime);
        anime.title = title;

        return anime;
      });

      await RedisService.set(RedisKey.RECENT + animes.currentPage, animes);
    }

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

    let animeInfo: IAnimeInfo = await RedisService.get(RedisKey.DETAILS + id);

    if (!animeInfo) {
      animeInfo = await animeProvider.fetchAnimeInfo(id);

      animeInfo.title = parseTitle(animeInfo);
      animeInfo.episodes = animeInfo.episodes?.map((anime) => {
        anime.title = episodeTitle(anime.id);
        return anime;
      });

      await RedisService.set(RedisKey.DETAILS + id, animeInfo);
    }

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

    let streamLinks: IEpisodeServer[] = await RedisService.get(
      RedisKey.STREAM + episodeId
    );

    if (!streamLinks) {
      streamLinks = await animeProvider.fetchEpisodeServers(episodeId);

      if (!streamLinks.length) {
        throw new Error("Episode not found");
      }

      await RedisService.set(
        RedisKey.STREAM + episodeId,
        streamLinks,
        60 * 60 * 24 * 2
      );
    }

    return streamLinks;
  } catch (err) {
    throw err;
  }
};

export const getTopAiring = async (
  page: number | string = 1,
  type?: number
): Promise<IAnimeResult[]> => {
  try {
    let opts = [+page, type];

    let animes: ISearch<IAnimeResult> = await RedisService.get(
      RedisKey.TOPAIR + page
    );

    if (!animes) {
      animes = await animeProvider.fetchTopAiring(...opts);

      animes.results = animes.results.map((anime) => {
        let title = parseTitle(anime);
        anime.title = title;

        return anime as IAnimeResult;
      });

      await RedisService.set(
        RedisKey.TOPAIR + animes.currentPage,
        animes,
        60 * 60 * 24
      );
    }

    return animes.results;
  } catch (err) {
    throw err;
  }
};

export const searchAnime = async (query: string, page: number) => {
  try {
    let animes: ISearch<IAnimeResult> = await RedisService.get(
      RedisKey.SEARCH + query + `/${page}`
    );

    if (!animes) {
      animes = await animeProvider.search(query, page);

      animes.results = animes.results.map((anime) => {
        let title = parseTitle(anime);
        anime.title = title;

        return anime;
      });

      await RedisService.set(
        RedisKey.SEARCH + `${query}/${page}`,
        JSON.stringify(animes),
        60 * 60 * 4
      );
    }

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
    let episodes: EpisodeStream = await RedisService.get(
      RedisKey.PREVNEXT + episodeId
    );

    if (episodes) {
      return episodes;
    }

    let episodeIdSplitted = episodeId.split("-");

    let episodeNow = episodeIdSplitted[episodeIdSplitted.length - 1];

    let animeId = await animeProvider.fetchAnimeIdFromEpisodeId(episodeId);

    let animeEpisodes = (
      await animeProvider.fetchAnimeInfo(animeId)
    ).episodes?.reduce((base: [string, IAnimeEpisode][] = [], el) => {
      if (el && (el.number - 1).toString() === episodeNow) {
        base.push(["prev", el]);
      }

      if (el && (el.number + 1).toString() === episodeNow) {
        base.push(["next", el]);
      }

      return base;
    }, []);

    if (animeEpisodes?.length) {
      episodes = Object.fromEntries(animeEpisodes);

      await RedisService.set(
        RedisKey.PREVNEXT + episodeId,
        JSON.stringify(episodes),
        60 * 60 * 24
      );
    }

    return episodes;
  } catch (err) {
    throw err;
  }
};

export const getByGenres = async (genres: string, page: number = 1) => {
  try {
    let aniGenres: ISearch<IAnimeResult> = await RedisService.get(
      `${RedisKey.GENRES}${genres}/${page}`
    );

    if (!aniGenres) {
      aniGenres = await animeProvider.fetchGenreInfo(genres, +page);
      aniGenres.results = aniGenres.results.map((anime) => {
        let title = parseTitle(anime);
        anime.title = title;

        return anime;
      });
      await RedisService.set(
        `${RedisKey.GENRES}${genres}/${page}`,
        JSON.stringify(aniGenres),
        60 * 15
      );
    }

    return aniGenres;
  } catch (err) {
    throw err;
  }
};
