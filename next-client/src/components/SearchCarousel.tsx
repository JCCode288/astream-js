"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { slideResponsive } from "@/helpers";

export default function SearchCarousel({ animes }: any) {
  const [windowSize, setWindowSize] = useState(1);

  return (
    <div className="swiper-container max-h-screen w-full">
      <Swiper
        className="h-full"
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={windowSize}
        spaceBetween={20}
        onResize={(swiper) => {
          slideResponsive(setWindowSize);
        }}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide
            className="h-full text-center py-6 sm:pl-7 pl-4"
            key={anime.id}
          >
            <CarouselCard anime={anime} />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
