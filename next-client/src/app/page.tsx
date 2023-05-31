import { getRecentAnime, getTopAiring } from "@/actions";
import { AniCard, AniCarousel, Animation, MainPagination } from "@/components";
import { notFound } from "next/navigation";

export default async function Home({ searchParams }: { searchParams: any }) {
  let page = searchParams?.page;

  let animesTop = await getTopAiring();
  let animesRecent = await getRecentAnime(page);

  if (!animesTop.length || !animesRecent.length) {
    notFound();
  }

  return (
    <>
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        Top Airing Anime
      </h1>
      <Animation>
        <main>
          <AniCarousel animes={animesTop} />
        </main>
      </Animation>
      <div className="divider"></div>
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        Recent Anime
      </h1>
      <main className="flex flex-row flex-wrap gap-x-4 gap-y-8 container sm:mx-auto mx-auto px-2 sm:px-0 sm:py-4 my-6 justify-center">
        {animesRecent.map((anime) => (
          <Animation key={anime.id} duration={Math.random() * 4.5}>
            <AniCard anime={anime} />
          </Animation>
        ))}
      </main>
      <MainPagination page={page} baseUrl="" />
    </>
  );
}
