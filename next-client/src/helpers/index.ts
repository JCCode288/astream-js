import { IAnimeResult } from "@consumet/extensions";

export const parseTitle = (anime: IAnimeResult) => {
  let title = anime.title;

  if (!title) {
    title = anime.id
      .split("-")
      .map((el) => {
        if (el.match(/(no|ni|to|wa|wo|ga|mo)/i)) {
          return el;
        }
        return el.charAt(0).toUpperCase() + el.slice(1);
      })
      .join(" ");
  }

  return title.toString();
};

export const episodeTitle = (episodeId: string) => {
  let splitted = episodeId.split("-").map((el) => {
    if (isNaN(+el)) {
      el = el.charAt(0).toUpperCase() + el.slice(1);
      return el;
    }
    return el;
  });
  return splitted.join(" ");
};
