"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass, EffectFlip, Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import CarouselCard from "./CarouselCard";
import { useEffect, useState } from "react";
import { getTopAiring } from "@/actions";
import { Animation, Loading } from ".";

export default function AniCarousel() {
  let [animesState, setAnimesState]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchAnimes = async () => {
    try {
      setLoading(true);
      let animesFetched = await getTopAiring(page);
      setAnimesState([...animesFetched]);
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
    <div className="swiper-container w-full py-4 px-8 ">
      <Animation>
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
      </Animation>
    </div>
  );
}
