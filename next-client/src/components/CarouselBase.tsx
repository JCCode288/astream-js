"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper";
import { IAnimeResult } from "@consumet/extensions";
import { useRouter } from "next/navigation";
import CarouselCard from "./CarouselCard";

export default function AniCarousel({ animes }: any) {
  const router = useRouter();

  return (
    <div className="swiper-container w-full py-4 px-8">
      <Swiper
        modules={[EffectFlip, Pagination]}
        effect="flip"
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide key={anime.id}>
            <CarouselCard anime={anime} router={router} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
