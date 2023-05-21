"use client";

import { MutableRefObject, Ref, useMemo, useRef, useState } from "react";
import BtnProvider from "./ButtonProvider";

export default function StreamContainer({ links }: any) {
  let allProvider: string[] = useMemo(() => {
    return links.map((el: any) => el.name);
  }, [links]);

  let [provider, setProvider] = useState(0);

  let usedProvider: string = useMemo(() => {
    return links[provider]?.url;
  }, [provider]);

  let iframeRef: MutableRefObject<HTMLIFrameElement | null> = useRef(null);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
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
          className="h-full sm:h-[80vh] w-[70vw] overflow-y-hidden border-2 border-accent shadow-md shadow-accent-focus rounded-sm"
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
