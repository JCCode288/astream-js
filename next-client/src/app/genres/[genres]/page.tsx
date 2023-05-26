import { getAnimesByGenres } from "@/actions";
import { AniCard } from "@/components";

export default async function GenresPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  let genres = params.genres;

  if (!genres.length) {
    throw new Error("no anime found");
  }

  let page = searchParams.page || 1;

  let aniGenres = await getAnimesByGenres(genres, page);

  let animes = aniGenres.results;

  return (
    <div className="my-4">
      <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
        {genres}
      </h1>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-6 justify-center">
        {animes.map((anime) => {
          return <AniCard anime={anime} />;
        })}
      </div>
    </div>
  );
}
