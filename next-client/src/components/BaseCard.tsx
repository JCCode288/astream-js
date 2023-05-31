"use client";

import Link from "next/link";
import { MainButton } from ".";
import { parseTitle } from "../helpers";

export default function BaseCard({ anime }: any) {
  return (
    <div className="card border-[3px] shadow-sm shadow-primary-focus rounded-sm border-primary items-stretch justify-center bg-base-200 align-middle text-base-content hover:shadow-primary-content hover:shadow-md ease-in-out duration-200 w-[25vw]">
      <Link href={`/details/${anime.id}`}>
        <figure>
          <img
            className="object-fill h-[60vh] w-auto"
            loading="lazy"
            src={anime.image}
            alt="Shoes"
          />
        </figure>
      </Link>
      <div className="card-body flex justify-between p-4">
        <div className="flex flex-wrap whitespace-normal">
          <p className="card-title justify-center w-auto">{`${parseTitle(
            anime
          )} ${anime.episodeNumber ? `- ${anime.episodeNumber}` : ""}`}</p>
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
