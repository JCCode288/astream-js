import { useQuery } from "@apollo/client";
import { useOutletContext, useParams } from "react-router-dom";
import { GET_STREAM_LINKS } from "../store/anime";
import Loader from "./Loader";
import { toast } from "react-toastify";
import Iframe from "react-iframe";

export default function Anistream() {
  let { episodeId } = useParams();

  const { error, loading, data } = useQuery(GET_STREAM_LINKS, {
    variables: {
      episodeId: {
        id: episodeId,
      },
    },
  });

  let streamLink = data?.episodeServer?.find(
    (el) => el.name === "Mp4Upload"
  )?.url;

  if (!streamLink) {
    streamLink = data?.episodeServer?.find(
      (el) => el.name === "Doodstream"
    )?.url;
  }
  if (error) {
    toast.error(error);
  }
  if (loading) {
    console.log(loading);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {streamLink ? (
            <Iframe
              url={streamLink}
              width="640px"
              height="320px"
              id="stream"
              display="block"
              position="relative"
            />
          ) : (
            <h1>No Streamable Links</h1>
          )}
        </>
      )}
    </>
  );
}
