export default function DetailPage({ params }: any) {
  let episodeId: string | undefined = params?.id;

  return <div>masuk Detail {episodeId}</div>;
}
