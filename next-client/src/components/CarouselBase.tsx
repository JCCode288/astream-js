"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper";
import { parseTitle } from "../helpers";
import { IAnimeResult } from "@consumet/extensions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AniCarousel({ animes }: any) {
  const router = useRouter();

  const handleTitle = (anime: IAnimeResult) => {
    let title = parseTitle(anime);

    let titleSplitted = title.split(" ");

    if (titleSplitted.length > 3) {
      let [first, second, ...rest]: string[] = titleSplitted;

      return `${first} ${second}\n${rest.join(" ")}`;
    }

    return title;
  };

  return (
    <div className="swiper-container w-full py-4">
      <Swiper
        modules={[EffectFlip, Pagination]}
        effect="flip"
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide key={anime.id}>
            {/* <Link href={`/details/${anime.id}`}> */}
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
                className="swiper-slide-img lg:w-1/4 w-3/4  max-w-2xl rounded-sm border-[2px] shadow-md shadow-primary-focus border-primary cursor-pointer"
                src={anime.image}
                alt={parseTitle(anime)}
              />
            </div>
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
