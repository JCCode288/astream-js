"use client";

import Link from "next/link";

import { Noto_Sans_JP } from "next/font/google";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const notoSansJP = Noto_Sans_JP({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();

  let [search, setSearch] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (search) {
      let params = search.replaceAll(" ", "-");

      router.push("/search/" + params);
    }
  };

  const inputChange = (e: ChangeEvent) => {
    let { value }: any = e.target;

    setSearch(value);
  };

  return (
    <div className="navbar bg-primary text-primary-content shadow-sm shadow-primary-focus py-4 sticky top-0 z-20">
      <div className="flex-1 gap-4 sm:justify-between">
        <Link
          href={"/"}
          className={
            "btn  rounded-sm btn-ghost normal-case text-3xl text-accent-content shadow-sm shadow-accent-focus border-2 border-accent-focus hover:border-accent-focus hover:border-2 hover:shadow-accent-content " +
            notoSansJP.className
          }
        >
          あstream
        </Link>
        <form
          onSubmit={handleSearch}
          className="flex form-control max-w-screen-sm"
        >
          <input
            type="text"
            placeholder="Search"
            className="input text-accent input-bordered w-full focus:border-primary-focus border-2"
            value={search}
            onChange={inputChange}
          />
        </form>
      </div>
    </div>
  );
}
