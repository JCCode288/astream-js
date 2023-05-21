"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { parseTitle } from "../helpers";
import { IAnimeResult } from "@consumet/extensions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchCarousel({ animes }: any) {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState(0);

  const handleTitle = (anime: IAnimeResult) => {
    let title = parseTitle(anime);

    let titleSplitted = title.split(" ");

    if (titleSplitted.length > 3) {
      let [first, second, ...rest]: string[] = titleSplitted;

      return `${first} ${second}\n${rest.join(" ")}`;
    }

    return title;
  };

  useEffect(() => {
    window.addEventListener("resize", slideResponsive);

    slideResponsive();

    return () => window.removeEventListener("resize", slideResponsive);
  }, []);

  const slideResponsive = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 480) {
      setWindowSize(1);
    } else if (windowWidth < 800) {
      setWindowSize(2);
    } else {
      setWindowSize(3);
    }
  };

  return (
    <div className="swiper-container w-full py-4">
      <Swiper
        className="h-full"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={windowSize}
      >
        {animes.map((anime: IAnimeResult | any) => (
          <SwiperSlide className="h-full text-center" key={anime.id}>
            <div className="card w-fit max-w-sm h-fit px-2 py-4 shadow-xl flex justify-center bg-primary border-2 border-accent rounded-sm mb-2">
              <p className="font-semibold">{handleTitle(anime)}</p>
            </div>
            <img
              onClick={() => {
                router.push(`/details/${anime.id}`);
              }}
              className="swiper-slide-img h-[60vh] rounded-sm border-[2px] shadow-md shadow-primary-focus border-primary cursor-pointer"
              src={anime.image}
              alt={parseTitle(anime)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
