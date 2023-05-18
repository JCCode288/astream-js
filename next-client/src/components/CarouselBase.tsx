"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import { parseTitle } from "../../helpers";
import { IAnimeResult } from "@consumet/extensions";

export default function AniCarousel({ animes }: any) {
  let opts = {
    slidesPerView: 1,
    pagination: true,
  };

  return (
    <Swiper modules={[EffectFlip]} effect="flip" {...opts}>
      {animes.map((anime: IAnimeResult) => (
        <SwiperSlide key={anime.id}>
          <div className="flex">
            <img
              className="sm:w-[30vw] w-screen h-fit"
              src={anime.image}
              alt={parseTitle(anime)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
