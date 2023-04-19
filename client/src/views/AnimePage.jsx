import { useQuery } from "@apollo/client";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { GET_ANIME_INFO } from "../store/anime";
import { toast } from "react-toastify";
import { Loader } from "../components";
import { useRef } from "react";

export default function MainLanding() {
  let { animeId } = useParams();
  const navigate = useNavigate();

  let { error, loading, data } = useQuery(GET_ANIME_INFO, {
    variables: { animeId: { id: animeId } },
  });
  if (error) {
    toast.error(error);
  }
  if (loading) {
    console.log(loading);
  }
  const anime = data?.animeInfo;
  const streamAni = useRef(null);

  function toStream(episodeId) {
    navigate(episodeId);
    streamAni.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="hero min-h-screen bg-gray-50">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={anime?.image}
                className="max-w-sm rounded-lg shadow-2xl"
                alt={anime?.title}
              />
              <div>
                <div>
                  <h1 className="text-2xl font-semibold">{anime?.type}</h1>
                </div>
                <h1 className="text-5xl font-bold">{anime?.title}</h1>
                <p className="py-6">{anime?.description}</p>
                <div className="container flex flex-col">
                  <strong>
                    Release Date:
                    <button className="py-1 px-2">{anime?.releaseDate}</button>
                  </strong>
                  <strong>
                    Status:
                    <button className="py-1 px-2">{anime?.status}</button>
                  </strong>
                  <strong>
                    Total Episodes:
                    <button className="py-1 px-2">
                      {anime?.totalEpisodes}
                    </button>
                  </strong>
                  <strong>
                    Genres:
                    {anime?.genres?.map((genre, idx) => {
                      return (
                        <button
                          className="mx-2 py-1 px-2 border-2 border-green-300 rounded-sm"
                          key={idx}
                        >
                          {genre}
                        </button>
                      );
                    })}
                  </strong>
                  <strong>
                    Episodes:
                    <div className="container flex flex-wrap">
                      {anime?.episodes?.map((episode) => {
                        return (
                          <button
                            onClick={() => toStream(episode?.id)}
                            className="m-2 py-1 px-2 border-2"
                          >
                            {episode.number}
                          </button>
                        );
                      })}
                    </div>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <Outlet context={streamAni} />
          <div ref={streamAni}></div>
        </div>
      )}
    </>
  );
}
