"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { slideResponsive } from "@/helpers";

export default function SearchCarousel({ animes }: any) {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => slideResponsive(setWindowSize));

    slideResponsive(setWindowSize);

    return () =>
      window.removeEventListener("resize", () =>
        slideResponsive(setWindowSize)
      );
  }, []);

  return (
    <div className="swiper-container max-h-screen w-full">
      <Swiper
        className="h-full"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={windowSize}
        spaceBetween={20}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide
            className="h-full text-center py-6 sm:pl-7 pl-4"
            key={anime.id}
          >
            <CarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
