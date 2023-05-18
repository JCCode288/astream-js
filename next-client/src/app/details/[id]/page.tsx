import { getAnimeDetail } from "@/actions";

export default async function DetailPage({ params }: any) {
  let animeId: string = params?.id;

  let animeDetail = await getAnimeDetail(animeId);

  return (
    <div>
      masuk Detail {animeId}
      <div>{JSON.stringify(animeDetail)}</div>
    </div>
  );
}
