import { getAnimeStream } from "@/actions";

export default async function StreamPage({ params }: any) {
  let episodeId: string = params?.id;

  let streamLinks = await getAnimeStream(episodeId);

  return (
    <div>
      masuk ke stream page {episodeId}
      <br />
      {JSON.stringify(streamLinks)}
    </div>
  );
}
