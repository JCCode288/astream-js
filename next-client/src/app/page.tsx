import { getRecentAnime, getTopAiring } from "@/actions";
import { AniCard, AniCarousel } from "@/components";

export default async function Home() {
  let animesTop = await getTopAiring();
  let animesRecent = await getRecentAnime();

  return (
    <>
      <h1 className="mx-4 my-2 text-3xl font-semibold">Top Airing Anime</h1>
      <main>
        <AniCarousel animes={animesTop} />
      </main>
      <div className="divider"></div>
      <h1 className="mx-4 my-2 text-3xl font-semibold">Recent Anime</h1>
      <main className="flex flex-row flex-wrap gap-x-4 gap-y-8 container sm:mx-auto mx-4 my-6 justify-center">
        {animesRecent.map((anime) => (
          <AniCard key={anime.id} anime={anime} />
        ))}
      </main>
    </>
  );
}
