"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass, EffectFlip, Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import CarouselCard from "./CarouselCard";
import { useEffect, useRef, useState } from "react";
import { getTopAiring } from "@/actions";

export default function AniCarousel({ animes }: any) {
  let [animesState, setAnimesState] = useState(animes);
  const [swipeCount, setSwipeCount] = useState(0);
  const page = useRef(1);

  const fetchAnimes = async () => {
    try {
      let animesFetched = await getTopAiring(page.current);
      setAnimesState([...animesFetched]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, [page.current]);

  const handlePagination = (swiper: SwiperClass) => {
    if (swiper.swipeDirection === "next" && swiper.isEnd) {
      setSwipeCount((prev) => prev + 1);

      if (swipeCount > 0) {
        page.current = page.current + 1;
        swiper.slideTo(0, 1500);

        setSwipeCount(0);
      }
    }
    if (
      swiper.swipeDirection === "prev" &&
      swiper.isBeginning &&
      page.current > 1
    ) {
      console.log("masuk prev");
      page.current = page.current - 1;
      setSwipeCount((prev) => prev + 1);

      if (swipeCount > 0) {
        swiper.slideTo(0, 1500);

        setSwipeCount(0);
      }
    }
  };

  return (
    <div className="swiper-container w-full py-4 px-8">
      <Swiper
        initialSlide={0}
        modules={[EffectFlip, Pagination]}
        effect="flip"
        pagination={{ clickable: true }}
        slidesPerView={1}
        onTouchEnd={(swiper) => handlePagination(swiper)}
      >
        {animesState.map((anime: IAnimeResult | any) => (
          <SwiperSlide key={anime.id}>
            <CarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
