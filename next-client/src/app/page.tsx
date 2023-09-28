import { findUsers, getRecentAnime, getTopAiring } from "@/actions";
import { AniCard, AniCarousel, Animation, MainPagination } from "@/components";
import Errors from "@/helpers/Errors";
import { IAnimeResult } from "@consumet/extensions";

import { notFound } from "next/navigation";

async function fetchMainPage(page: any) {
  try {
    let data: {
      topAnimes: IAnimeResult[];
      animesRecent: IAnimeResult[];
      users: any[];
    } = { topAnimes: [], animesRecent: [], users: [] };
    let topAnimesPromise = getTopAiring();
    let animesRecentPromise = getRecentAnime(page);
    let usersPromise = findUsers({});

    let [topAnimes, animesRecent, users] = await Promise.all([
      topAnimesPromise,
      animesRecentPromise,
      usersPromise,
    ]);

    data = {
      topAnimes,
      animesRecent,
      users,
    };

    if (!data.animesRecent || !data.animesRecent.length) {
      return notFound();
    }

    return data;
  } catch (err) {
    console.log(err, "<<<< Main Page Error");
  }
}

export default async function Home({ searchParams }: { searchParams: any }) {
  let page = searchParams?.page;

  let data = await fetchMainPage(page);

  if (!data) throw new Errors(500, "Something is wrong");

  let { topAnimes, animesRecent, users } = data;

  return (
    <>
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        Top Airing Anime
      </h1>
      <main>
        <AniCarousel animes={topAnimes} />
      </main>
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
