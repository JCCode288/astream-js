"use client";

import { episodeTitle } from "@/helpers";
import { useRouter } from "next/navigation";

export default function CarouselDetail({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/stream/${id}`);
      }}
      className="sm:btn border-2 border-accent shadow-sm shadow-accent-focus sm:btn-primary flex text-start flex-wrap bg-primary font-semibold py-1 px-2 text-primary-content sm:w-fit sm:rounded-sm rounded-sm"
    >
      Watch {episodeTitle(id)}
    </div>
  );
}
