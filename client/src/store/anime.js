const { gql } = require("@apollo/client");

export const GET_TOP_ANIMES = gql`
  query TopAnimes {
    topAnimes {
      currentPage
      hasNextPage
      results {
        id
        title
        image
        url
        genres
      }
    }
  }
`;

export const GET_RECENT_ANIMES = gql`
  query RecentAnimes {
    recentAnimes {
      currentPage
      hasNextPage
      results {
        id
        episodeId
        episodeNumber
        title
        image
        url
      }
    }
  }
`;

export const GET_ANIME_INFO = gql`
  query AnimeInfo($animeId: animeId) {
    animeInfo(animeId: $animeId) {
      id
      title
      genres
      totalEpisodes
      image
      releaseDate
      description
      type
      status
      episodes {
        id
        number
        url
      }
    }
  }
`;

export const GET_ANIME_EPISODE = gql`
  query AnimeEpisode($episodeId: episodeId) {
    animeEpisode(episodeId: $episodeId) {
      headers {
        Referer
      }
      sources {
        url
        isM3U8
        quality
      }
      download
    }
  }
`;

export const GET_STREAM_LINKS = gql`
  query EpisodeServer($episodeId: episodeId) {
    episodeServer(episodeId: $episodeId) {
      name
      url
    }
  }
`;

export const GET_SEARCHED_ANIMES = gql`
  query SearchAnimes($query: query) {
    searchAnimes(query: $query) {
      currentPage
      hasNextPage
      results {
        id
        title
        image
      }
    }
  }
`;
