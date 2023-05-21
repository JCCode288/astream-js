import { getAnimeStream } from "@/actions";
import { StreamContainer } from "@/components";
import { episodeTitle } from "@/helpers";

export default async function StreamPage({ params }: any) {
  let episodeId: string = params?.id;

  let streamLinks = await getAnimeStream(episodeId);

  return (
    <div className="container flex flex-col relative my-4">
      <div className="text-2xl relative left-[5%] pb-2 text-primary">
        <strong>
          <span>{episodeTitle(episodeId)}</span>
        </strong>
      </div>
      <StreamContainer links={streamLinks} />
    </div>
  );
}
