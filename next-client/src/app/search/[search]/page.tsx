import { searchAnime } from "@/actions";
import { AniSearch, Animation } from "@/components";
import { IAnimeResult } from "@consumet/extensions";

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  let { search } = params;

  search = search.replaceAll("-", " ");

  let searched: IAnimeResult[] = await searchAnime(search);

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
    <Animation>
      <div className="justify-center px-4 sm:mx-auto flex">
        <AniSearch animes={searched} />
      </div>
    </Animation>
  );
}
