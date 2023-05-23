import { getRecentAnime, getTopAiring } from "@/actions";
import { AniCard, AniCarousel } from "@/components";
import { notFound } from "next/navigation";

export default async function Home() {
  let animesTop = await getTopAiring();
  let animesRecent = await getRecentAnime();

  if (!animesTop.length || !animesRecent.length) {
    return notFound();
  }

  return (
    <>
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        Top Airing Anime
      </h1>
      <main>
        <AniCarousel animes={animesTop} />
      </main>
      <div className="divider"></div>
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        Recent Anime
      </h1>
      <main className="flex flex-row flex-wrap gap-x-4 gap-y-8 container sm:mx-auto mx-auto px-2 sm:px-0 sm:py-4 my-6 justify-center">
        {animesRecent.map((anime) => (
          <AniCard key={anime.id} anime={anime} />
        ))}
      </main>
    </>
  );
}
