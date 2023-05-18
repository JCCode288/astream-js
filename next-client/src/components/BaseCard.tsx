"use client";

import Link from "next/link";
import { MainButton } from ".";
import { parseTitle } from "../../helpers";

export default function BaseCard({ anime }: any) {
  return (
    <div className="card border-[3px] shadow-md shadow-primary-focus rounded-sm border-primary items-stretch justify-center bg-base-200 align-middle text-base-content">
      <Link href={`/details/${anime.id}`}>
        <figure>
          <img
            className="object-fill h-[60vh] w-auto"
            src={anime.image}
            alt="Shoes"
          />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <div className="flex flex-wrap max-w-xs">
          <p className="card-title">{parseTitle(anime)}</p>
        </div>
        <div>Episode Number : {anime.episodeNumber}</div>
        <div className="card-actions">
          <Link href={`/stream/${anime.episodeId}`}>
            <MainButton title="Watch Episode" shadow="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}
