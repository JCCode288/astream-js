import { getAnimesByGenres } from "@/actions";
import { notFound } from "next/navigation";

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

  let animes = await getAnimesByGenres(genres, page);

  return <div>{JSON.stringify(animes)}</div>;
}
