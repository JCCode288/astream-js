import { IAnimeEpisode } from "@consumet/extensions";

export interface IEpisodeStream {
  next?: IAnimeEpisode;
  prev?: IAnimeEpisode;
}
