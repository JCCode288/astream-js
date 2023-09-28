import { IAnimeEpisode } from "@consumet/extensions";

export interface EpisodeStream {
  next?: IAnimeEpisode;
  prev?: IAnimeEpisode;
}
