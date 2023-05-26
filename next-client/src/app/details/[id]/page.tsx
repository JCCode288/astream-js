import { getAnimeDetail } from "@/actions";
import { BackBtn, EpisodeBtn, GenreBtn } from "@/components";
import { episodeTitle, parseTitle } from "@/helpers";
import Link from "next/link";

export default async function DetailPage({ params }: any) {
  let animeId: string = params?.id;

  let animeDetail = await getAnimeDetail(animeId);

  return (
    <div className="flex items-center flex-col my-4 gap-2">
      <div className="w-full flex justify-start px-4 py-2 sm:py-0">
        <BackBtn />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="indicator">
            <div className="indicator-item indicator-top indicator-start sm:indicator-end">
              <button className="btn btn-primary rounded-sm no-animation cursor-default shadow-md border-2 border-accent-focus">
                {animeDetail?.subOrDub}
              </button>
            </div>
            <img
              src={animeDetail?.image}
              className="max-w-xs sm:max-w-sm rounded-sm shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{`${parseTitle(animeDetail)} ( ${
              animeDetail.releaseDate
            } )`}</h1>
            <p className="py-6">
              {animeDetail?.description
                ? animeDetail.description
                : "No Description of this Anime"}
            </p>
            <div className="gap-2 flex flex-wrap">
              {animeDetail.genres?.map((genre, idx) => (
                <Link key={idx} href={"/genres/" + genre}>
                  <GenreBtn genre={genre} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-wrap gap-y-4 justify-evenly px-2 sm:px-4 sm:pb-4 max-h-[70vh] overflow-y-auto">
        {animeDetail.episodes ? (
          animeDetail.episodes?.reverse().map((episode) => {
            let title: string = episodeTitle(episode.id);
            return (
              <EpisodeBtn title={title} id={episode.id} key={episode.number} />
            );
          })
        ) : (
          <p className="text-2xl font-semibold">No Episode Yet</p>
        )}
      </div>
    </div>
  );
}
