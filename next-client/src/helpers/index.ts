import { IAnimeResult } from "@consumet/extensions";
import { Dispatch, SetStateAction } from "react";

export const parseTitle = (anime: IAnimeResult) => {
  let title: string = anime.title.toString();

  if (!title || title.match(/([email protected])/i)) {
    title = anime.id
      .split("-")
      .map((el) => {
        if (el.match(/^(no|ni|to|wa|wo|ga|mo)$/i)) {
          return el;
        }
        return el.charAt(0).toUpperCase() + el.slice(1);
      })
      .join(" ");
  }

  return title;
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

export const handleTitle = (anime: IAnimeResult) => {
  let title = parseTitle(anime);

  let titleSplitted = title.split(" ");

  if (titleSplitted.length > 8) {
    let first = titleSplitted.slice(0, 4);
    let second = titleSplitted.slice(-3);

    return `${first.join(" ")}\n ... ${second.join(" ")}`;
  } else if (titleSplitted.length > 4) {
    let result = "";

    for (let i = 0; i <= titleSplitted.length; i++) {
      result += titleSplitted[i];
      if (i === titleSplitted.length - 1) {
        return result;
      }
      if ((i + 1) % 3 === 0) {
        result += "\n";
      } else {
        result += " ";
      }
    }
  } else if (titleSplitted.length > 2) {
    let [first, second, ...rest]: string[] = titleSplitted;

    return `${first} ${second}\n${rest.join(" ")}`;
  }

  return title;
};

export const slideResponsive = (
  setWindowSize: Dispatch<SetStateAction<any>>
) => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    setWindowSize(1);
  } else if (windowWidth < 800) {
    setWindowSize(2);
  } else {
    setWindowSize(3);
  }
};
