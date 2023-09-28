"use client";

import Link from "next/link";
export default function MainPagination({
  page,
  baseUrl,
}: {
  page: number | string | undefined;
  baseUrl: string;
}) {
  page = page || 1;

  return (
    <div className="flex justify-center py-4">
      <div className="flex flex-row w-[25%] justify-center">
        {+page > 1 ? (
          <Link
            href={`${baseUrl}/?page=${+page - 1}`}
            className="flex w-fit pr-[10%]"
          >
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/color-glass/96/next.png"
              alt="prev"
              className="scale-x-[-1] hover:shadow-sm border-primary-focus border-2 hover:shadow-black ease-in duration-100 rounded-md justify-start"
            />
          </Link>
        ) : (
          ""
        )}

        <Link
          href={`${baseUrl}/?page=${+page + 1}`}
          className="flex w-fit pl-[10%]"
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color-glass/96/next.png"
            alt="next"
            className="hover:shadow-sm border-primary-focus border-2 hover:shadow-black ease-in duration-100 rounded-md justify-end"
          />
        </Link>
      </div>
    </div>
  );
}
