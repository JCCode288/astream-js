import { getAnimeStream, getPrevNextEpisodes } from "@/actions";
import { BackBtn, StreamContainer } from "@/components";
import ButtonCTA from "@/components/ButtonCTA";
import { episodeTitle } from "@/helpers";
import Link from "next/link";

export default async function StreamPage({ params }: any) {
  let episodeId: string = params?.id;

  let streamLinks = await getAnimeStream(episodeId);

  let { next, prev } = await getPrevNextEpisodes(episodeId);

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
      <div className="btn-group self-center">
        {prev ? (
          <Link href={`/stream/${prev?.id}`}>
            <ButtonCTA title="Prev" shadow="small" />
          </Link>
        ) : (
          ""
        )}
        {next ? (
          <Link href={`/stream/${next?.id}`}>
            <ButtonCTA title="Next" shadow="small" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
