import { getAnimeStream, getPrevNextEpisodes } from "@/actions";
import { IEpisodeStream } from "@/actions/action.interface";
import { BackBtn, StreamContainer } from "@/components";
import ButtonCTA from "@/components/ButtonCTA";
import { episodeTitle } from "@/helpers";
import Errors from "@/helpers/Errors";
import Link from "next/link";

async function fetchStreamPage(episodeId: string) {
  try {
    let streamLinksPromise = getAnimeStream(episodeId);
    let nextPrevPromise = getPrevNextEpisodes(episodeId);

    const [streamLinks, nextPrev] = await Promise.all([
      streamLinksPromise,
      nextPrevPromise,
    ]);

    const prev = nextPrev?.prev;
    const next = nextPrev?.next;

    return { streamLinks, next, prev };
  } catch (err) {
    console.log(err);
  }
}

export default async function StreamPage({ params }: any) {
  let episodeId: string = params?.id;

  let data = await fetchStreamPage(episodeId);

  if (!data) throw new Errors(500, "Something is wrong");

  let { streamLinks, next, prev } = data;

  return (
    <div className="flex flex-col relative my-4">
      <div className="flex w-fit relative p-4">
        <BackBtn />
      </div>
      <div className="flex text-2xl relative sm:left-[5%] pb-2 text-primary w-3/4">
        <div className="flex flex-auto font-semibold w-full">
          <p className="px-4 flex-wrap">{episodeTitle(episodeId)}</p>
        </div>
      </div>
      <StreamContainer links={streamLinks} />
      <div className="btn-group self-center gap-2 p-4">
        {prev ? (
          <Link href={`/stream/${prev?.id}`}>
            <ButtonCTA title="Prev" shadow="small" location="justify-end" />
          </Link>
        ) : (
          ""
        )}
        {next ? (
          <Link href={`/stream/${next?.id}`}>
            <ButtonCTA title="Next" shadow="small" location="justify-start" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
