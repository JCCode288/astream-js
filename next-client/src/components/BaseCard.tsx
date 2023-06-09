"use client";

import Link from "next/link";
import { MainButton } from ".";

export default function BaseCard({ anime }: any) {
  return (
    <div className="card border-[3px] shadow-sm shadow-primary-focus rounded-lg border-primary items-stretch justify-center bg-base-200 align-middle text-base-content hover:shadow-primary-content hover:shadow-md ease-in-out duration-200 w-fit h-full">
      <Link href={`/details/${anime.id}`}>
        <figure className="h-[60vh] w-[45vh]">
          <img
            className="object-cover w-full h-full"
            loading="lazy"
            src={anime.image}
            alt="Shoes"
          />
        </figure>
      </Link>
      <div className="card-body flex justify-between p-4">
        <div className="flex ">
          <p className="card-title justify-center flex-wrap w-36">{`${
            anime.title
          } ${anime.episodeNumber ? `- ${anime.episodeNumber}` : ""}`}</p>
        </div>
        <div className="card-actions justify-center relative">
          <Link href={`/stream/${anime.episodeId}`}>
            <MainButton title="Watch Episode" shadow="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}
