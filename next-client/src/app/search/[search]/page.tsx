import { searchAnime } from "@/actions";
import { AniSearch } from "@/components";

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  let { search } = params;

  search = search.replaceAll("-", " ");

  let searched = await searchAnime(search);

  if (!searched.length) {
    return (
      <div className="flex h-[60vh]">
        <div className="py-4 px-2 font-semibold text-4xl">
          No Anime Found UwU
        </div>
      </div>
    );
  }

  return (
    <div className="justify-center px-4 sm:mx-auto flex">
      <AniSearch animes={searched} />
    </div>
  );
}
