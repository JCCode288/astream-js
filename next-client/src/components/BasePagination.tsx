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
    <div className="flex justify-center gap-4 py-4">
      {+page > 1 ? (
        <Link href={`${baseUrl}/?page=${+page - 1}`}>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/color-glass/96/next.png"
            alt="prev"
            className="scale-x-[-1] hover:shadow-sm border-primary-focus border-2 hover:shadow-black ease-in duration-100 rounded-md"
          />
        </Link>
      ) : (
        ""
      )}

      <Link href={`${baseUrl}/?page=${+page + 1}`}>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/color-glass/96/next.png"
          alt="next"
          className="hover:shadow-sm border-primary-focus border-2 hover:shadow-black ease-in duration-100 rounded-md"
        />
      </Link>
    </div>
  );
}
