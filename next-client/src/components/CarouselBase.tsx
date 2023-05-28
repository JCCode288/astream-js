"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import CarouselCard from "./CarouselCard";

export default function AniCarousel({ animes }: any) {
  return (
    <div className="swiper-container w-full py-4 px-8">
      <Swiper
        initialSlide={0}
        loop={true}
        modules={[EffectFlip, Pagination]}
        effect="flip"
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide key={anime.id}>
            <CarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
