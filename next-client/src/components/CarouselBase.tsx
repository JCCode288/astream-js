"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Swiper as SwiperClass,
  EffectFlip,
  Pagination,
  Autoplay,
} from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import CarouselCard from "./CarouselCard";
import { useEffect, useMemo, useState } from "react";
import { getTopAiring } from "@/actions";
import { Animation, Loading } from ".";

export default function AniCarousel({ animes }: { animes: IAnimeResult[] }) {
  let [animesState, setAnimesState]: any = useState(animes);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [onEdge, setOnEdge] = useState("Beginning");

  const message = useMemo(() => {
    if (onEdge === "Beginning") return "Slide Prev to Return";
    else if (onEdge === "End") return "Keep Slide Next to Next Top Airing";
    else return "";
  }, [onEdge]);

  const fetchAnimes = async (pageCur: number) => {
    try {
      setLoading(true);
      if (pageCur <= 1) {
        setAnimesState(animes);
      }

      let animesFetched = await getTopAiring(pageCur);

      setAnimesState(() => {
        return [...animesFetched];
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);

      throw err;
    }
  };

  useEffect(() => {
    fetchAnimes(page);
  }, [page]);

  const handlePagination = (swiper: SwiperClass) => {
    if (swiper.swipeDirection === "next" && swiper.isEnd) {
      setPage((page) => page + 1);
      swiper.slideTo(1, 1500);
    }
    if (swiper.swipeDirection === "prev" && swiper.isBeginning && page > 1) {
      setPage((page) => page - 1);

      swiper.slideTo(0, 1500);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="swiper-container w-full py-4 px-8">
      <Animation>
        <Swiper
          autoplay={{ delay: 3000 }}
          initialSlide={0}
          onBeforeTransitionStart={(swiper) => {
            if (swiper.isEnd) setOnEdge("End");
            else if (swiper.isBeginning) setOnEdge("Beginning");
            else setOnEdge("No");
          }}
          modules={[EffectFlip, Pagination, Autoplay]}
          effect="flip"
          pagination={{ clickable: true }}
          slidesPerView={1}
          onTouchEnd={(swiper) => handlePagination(swiper)}
        >
          {animesState.map((anime: IAnimeResult | any) => (
            <SwiperSlide
              className={
                onEdge === "End" || (onEdge === "Beginning" && page > 1)
                  ? "tooltip max-md:tooltip-open tooltip-primary tooltip-bottom"
                  : ""
              }
              data-tip={message}
              key={anime.id}
            >
              <CarouselCard anime={anime} />
              <div></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Animation>
    </div>
  );
}
