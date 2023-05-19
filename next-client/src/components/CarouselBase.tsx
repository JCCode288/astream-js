"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper";
import { parseTitle } from "../helpers";
import { IAnimeResult } from "@consumet/extensions";

export default function AniCarousel({ animes }: any) {
  const handleTitle = (anime: IAnimeResult) => {
    let title = parseTitle(anime);

    let titleSplitted = title.split(" ");
    console.log(titleSplitted);

    if (titleSplitted.length > 3) {
      let [first, second, ...rest]: string[] = titleSplitted;

      return `${first} ${second}\n${rest.join(" ")}`;
    }
    return title;
  };

  return (
    <div className="swiper-container">
      <Swiper
        modules={[EffectFlip, Pagination]}
        effect="flip"
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide key={anime.id}>
            <div className="flex align-middle justify-center sm:mt-0 mt-2">
              <div className="relative flex">
                <h1 className="absolute  text-xl sm:text-2xl font-semibold text-primary text-stroke bg-accent p-1 justify-self-end shadow-sm border-[1px] sm:left-[-2rem] sm:top-[-1.5rem] left-[-1rem] top-[-1rem]  whitespace-pre">
                  {handleTitle(anime)}
                </h1>
              </div>
              <img
                className="swiper-slide-img sm:w-1/4 w-3/4"
                src={anime.image}
                alt={parseTitle(anime)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
