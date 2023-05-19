"use client";

import Link from "next/link";

import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div> */}
      <div className="flex-1">
        <Link
          href={"/"}
          className={
            "btn  rounded-sm btn-ghost normal-case text-3xl text-accent-focus shadow-sm border-[1px] border-accent " +
            notoSansJP.className
          }
        >
          あstream
        </Link>
      </div>
    </div>
  );
}
