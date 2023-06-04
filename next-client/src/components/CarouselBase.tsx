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

  const fetchAnimes = async () => {
    try {
      setLoading(true);
      if (page > 1) {
        let animesFetched = await getTopAiring(page);
        setAnimesState([...animesFetched]);
      } else {
        setAnimesState(animes);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimes();
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
          className={
            onEdge === "End" || (onEdge === "Beginning" && page > 1)
              ? "sm:tooltip sm:tooltip-primary sm:tooltip-bottom"
              : ""
          }
          initialSlide={0}
          onBeforeTransitionStart={(swiper) => {
            if (swiper.isEnd) setOnEdge("End");
            else if (swiper.isBeginning) setOnEdge("Beginning");
            else setOnEdge("Non");
          }}
          modules={[EffectFlip, Pagination, Autoplay]}
          effect="flip"
          pagination={{ clickable: true }}
          slidesPerView={1}
          onTouchEnd={(swiper) => handlePagination(swiper)}
          data-tip={message}
        >
          {animesState.map((anime: IAnimeResult | any) => (
            <SwiperSlide key={anime.id}>
              <CarouselCard anime={anime} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Animation>
    </div>
  );
}
