import { searchAnime } from "@/actions";
import { AniSearch, Animation, BackBtn } from "@/components";
import { IAnimeResult } from "@consumet/extensions";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { search: string };
  searchParams: { page: number };
}) {
  let { search } = params;
  let { page } = searchParams;

  if (!page) {
    page = 1;
  }

  search = search.replaceAll("-", " ");

  let searched: IAnimeResult[] = await searchAnime(search, page);

  if (!searched.length) {
    return (
      <div className="flex h-[60vh] flex-col">
        <div className="px-4 py-2">
          <BackBtn />
        </div>
        <div className="py-4 px-2 font-semibold text-4xl">
          No Anime Found UwU
        </div>
      </div>
    );
  }

  return (
    <Animation>
      <div className="justify-center px-4 sm:mx-auto flex">
        <AniSearch animes={searched} params={{ search, page }} />
      </div>
    </Animation>
  );
}
