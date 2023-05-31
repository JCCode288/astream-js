"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass, Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import { useState } from "react";
import CarouselCard from "./CarouselCard";
import { slideResponsive } from "@/helpers";
import { useRouter } from "next/navigation";
import { Animation } from ".";

export default function SearchCarousel({ animes, params }: any) {
  const [windowSize, setWindowSize] = useState(3);
  const [swipeCount, setSwipeCount] = useState(0);
  const router = useRouter();
  const { search, page } = params;

  const handlePagination = (swiper: SwiperClass) => {
    if (swiper.swipeDirection === "next" && swiper.isEnd) {
      setSwipeCount((prev) => prev + 1);

      if (swipeCount > 0) {
        router.push(`/search/${search}?page=${+page + 1}`);

        swiper.slideTo(0, 1500);

        setSwipeCount(0);
      }
    }
    if (swiper.swipeDirection === "prev" && swiper.isBeginning && page > 1) {
      setSwipeCount((prev) => prev + 1);

      if (swipeCount > 0) {
        router.push(`/search/${search}?page=${+page - 1}`);

        swiper.slideTo(0, 200);

        setSwipeCount(0);
      }
    }
  };

  return (
    <div className="swiper-container max-h-screen w-full">
      <Swiper
        className="h-full"
        initialSlide={0}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={windowSize}
        spaceBetween={20}
        grabCursor={true}
        onResize={() => {
          slideResponsive(setWindowSize);
        }}
        onTouchEnd={(swiper) => handlePagination(swiper)}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide
            className="h-full text-center py-6 sm:pl-7 pl-4"
            key={anime.id}
          >
            <Animation type="linear">
              <CarouselCard anime={anime} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </Animation>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
