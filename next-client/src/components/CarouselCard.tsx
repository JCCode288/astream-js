import { handleTitle, parseTitle } from "@/helpers";
import { IAnimeResult } from "@consumet/extensions";
import Link from "next/link";

export default function CarouselCard({ anime }: { anime: IAnimeResult }) {
  return (
    <div className="flex align-middle justify-center sm:mt-0 mt-2">
      <div className="flex indicator h-full sm:pt-0 pt-4">
        <h1 className="absolute rounded-md flex h-fit  text-xl sm:text-2xl font-semibold text-primary-content  bg-accent p-1 justify-self-start shadow-sm border-[1px]  whitespace-pre  sm:left-[-2rem] left-[-1rem] sm:top-[-1rem] top-[-0.5rem]">
          {handleTitle(anime)}
        </h1>
      </div>
      <Link href={`/details/${anime.id}`}>
        <img
          className="swiper-slide-img h-[60vh] sm:h-[73vh] rounded-xl border-[2px] shadow-md shadow-primary-focus border-primary cursor-pointer object-cover object-center"
          src={anime.image}
          loading="lazy"
          alt={parseTitle(anime)}
        />
      </Link>
    </div>
  );
}
