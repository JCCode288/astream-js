import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_STREAM_LINKS } from "../store/anime";
import Loader from "./Loader";
import { toast } from "react-toastify";
import Iframe from "react-iframe";
import { useEffect, useRef } from "react";

export default function Anistream() {
  let { episodeId } = useParams();
  let streamEmbedRef = useRef(null);

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
  useEffect(() => {
    if (!loading && streamEmbedRef) {
      streamEmbedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading, streamEmbedRef]);

  return (
    <div className="mx-auto py-4 flex justify-center flex-grow">
      {loading ? (
        <Loader />
      ) : (
        <div ref={streamEmbedRef} className="">
          {streamLink ? (
            <Iframe
              className="h-[50vh] w-[50vw]"
              url={streamLink}
              id="stream"
              display="block"
              position="relative"
            />
          ) : (
            <h1>No Streamable Links</h1>
          )}
        </div>
      )}
    </div>
  );
}
