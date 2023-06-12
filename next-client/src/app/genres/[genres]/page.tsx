import { getAnimesByGenres } from "@/actions";
import { Animation, CarouselCard, MainPagination } from "@/components";
import Errors from "@/helpers/Errors";

async function fetchGenresPage(genres: string, page: number) {
  try {
    let aniGenres = await getAnimesByGenres(genres, page);

    let animes = aniGenres.results;

    return { animes };
  } catch (err) {
    console.log(err);
  }
}

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

  let data = await fetchGenresPage(genres, page);

  if (!data) throw new Errors(500, "Something is wrong");

  const { animes } = data;

  return (
    <div className="my-4 mx-8">
      <Animation>
        <h1 className="mx-4 my-2 text-3xl font-semibold border-2 w-fit px-4 py-2 border-accent-focus rounded-sm">
          {genres}
        </h1>
      </Animation>
      <div className="flex flex-row flex-wrap gap-y-8 gap-x-10 justify-evenly p-8">
        {animes.map((anime, idx) => {
          return <CarouselCard key={anime.id} anime={anime} />;
        })}
      </div>
      <MainPagination page={page} baseUrl={`/genres/${genres}`} />
    </div>
  );
}
