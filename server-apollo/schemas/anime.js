const AnimeProvider = require("../providers/anime");

const animeTypeDefs = `#graphql
 
type TopAnime {
  id: String
  title: String
  image: String
  url: String
  genres: [String]
}

type TopAnimes {
  currentPage: Int
  hasNextPage: Boolean
  results: [TopAnime]
}

type RecentAnimes {
  currentPage: Int
  hasNextPage: Boolean
  results: [RecentAnime]
}

type RecentAnime {
  id: String
  episodeId: String
  episodeNumber: Int
  title: String
  image: String
  url: String
}

type SearchedAnimes {
  currentPage: Int
  hasNextPage: Boolean
  results: [SearchAnime]
}

type SearchAnime {
  id: String
  title: String
  image: String
}

type AnimeInfo {
  id: String
  title: String
  genres: [String]
  totalEpisodes: Int
  image: String
  releaseDate: String
  description: String
  type: String
  status: String
  episodes: [EpisodeInfo]
}

type EpisodeInfo {
    id: String
    number: Int
    url: String
}

type AnimeEpisode {
  headers: AnimeEpisodeHeader
  sources: [EpisodeSource]
  download: String
}

type AnimeEpisodeHeader {
    Referer: String
}

type EpisodeSource {
  url: String
  isM3U8: Boolean
  quality: String
}

type EpisodeServer {
  name: String
  url: String
}

input animeId {
  id: String
}

input episodeId {
  id: String
}

input query {
  searchQuery: String
}

type Query {
    topAnimes: TopAnimes
    recentAnimes: RecentAnimes
    animeInfo (animeId: animeId): AnimeInfo
    animeEpisode (episodeId: episodeId): AnimeEpisode
    episodeServer (episodeId: episodeId): [EpisodeServer]
    searchAnimes (query: query): SearchedAnimes
}
`;

const animeResolvers = {
  Query: {
    topAnimes: AnimeProvider.topAnimes,
    recentAnimes: AnimeProvider.recentAnimes,
    animeInfo: AnimeProvider.animeByIdInfo,
    animeEpisode: AnimeProvider.fetchAnimeByIdEpisode,
    episodeServer: AnimeProvider.fetchEpisodeServers,
    searchAnimes: AnimeProvider.searchAnimes,
  },
};

module.exports = {
  animeTypeDefs,
  animeResolvers,
};
