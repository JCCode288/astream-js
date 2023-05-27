"use client";

import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import BtnProvider from "./ButtonProvider";

export default function StreamContainer({ links }: any) {
  let [provider, setProvider] = useState(0);

  let iframeRef: MutableRefObject<HTMLIFrameElement | null> = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      let cachedProvider = JSON.parse(localStorage.streamProvider);

      setProvider(cachedProvider.idx);

      iframeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [iframeRef]);

  let usedProvider: string = useMemo(() => {
    return links[provider]?.url || links[0]?.url;
  }, [provider]);

  let allProvider: string[] = links.map((el: any) => el.name);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-0">
      <div className="flex justify-center">
        <iframe
          onPlaying={() => {
            iframeRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onError={() =>
            setProvider(() => {
              return allProvider.findIndex((el) => el.match(/(dood)/i));
            })
          }
          allowFullScreen={true}
          ref={iframeRef}
          className="sm:h-[40vh]  md:h-[80vh] sm:w-[70vw]  w-[90vw] h-[35vh] overflow-y-hidden border-2 border-accent shadow-md shadow-accent-focus rounded-sm overflow-hidden"
          src={usedProvider}
        />
      </div>
      <div className="btn gap-2 sm:gap-0 sm:btn-group my-4 h-full w-fit">
        {allProvider.map((provider: string, idx: number) => (
          <BtnProvider
            key={idx}
            title={{ provider, idx }}
            setProvider={setProvider}
            iframeRef={iframeRef}
          />
        ))}
      </div>
    </div>
  );
}
