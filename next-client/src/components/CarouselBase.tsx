"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper";
import { parseTitle } from "../helpers";
import { IAnimeResult } from "@consumet/extensions";
import { useRouter } from "next/navigation";
import { handleTitle } from "../helpers";

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
            <div className="flex align-middle justify-center sm:mt-0 mt-2">
              <div className="relative flex">
                <h1 className="absolute  text-xl sm:text-2xl font-semibold text-primary  bg-accent p-1 justify-self-end shadow-sm border-[1px] sm:left-[-2rem] sm:top-[-1.5rem] left-[-1rem] top-[-1rem]  whitespace-pre">
                  {handleTitle(anime)}
                </h1>
              </div>
              <img
                onClick={() => {
                  router.push(`/details/${anime.id}`);
                }}
                className="swiper-slide-img h-[73vh] rounded-sm border-[2px] shadow-md shadow-primary-focus border-primary cursor-pointer"
                src={anime.image}
                alt={parseTitle(anime)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
