"use client";

import Link from "next/link";

import { Noto_Sans_JP } from "next/font/google";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import ThemeSwap from "./ThemeSwap";
import { useDebouncer } from "@/hooks/useDebouncer";

const notoSansJP = Noto_Sans_JP({ weight: "600", subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();

  const [theme, setTheme]: any = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const handleTheme = (e: any) => {
    const { value } = e.target;
    setTheme(value);
    localStorage.theme = value;
  };

  const searchDebounce = useDebouncer((val: string) => {
    handleSearch(val);
  }, 1500);

  const inputChange = (e: ChangeEvent) => {
    let { value }: any = e.target;

    setSearch(value);
    searchDebounce(value);
  };

  const handleSearch = (val: string) => {
    if (search) {
      let params = val.replaceAll(" ", "-");

      router.push("/search/" + params);
    }
  };

  return (
    <div className="navbar bg-primary text-primary-content shadow-sm shadow-primary-focus py-4 sticky top-0 z-20">
      <div className="flex-1 gap-4 justify-between">
        <div className="flex w-fit flex-row gap-2">
          <Link
            href={"/"}
            className={
              "btn rounded-md btn-ghost normal-case text-3xl text-accent-content shadow-sm shadow-accent-focus border-2 border-accent-focus hover:border-accent-focus hover:border-2 hover:shadow-accent-content " +
              notoSansJP.className
            }
          >
            <strong>アニStream</strong>
          </Link>
          <ThemeSwap handleTheme={handleTheme} theme={theme} />
        </div>

        <form onSubmit={handleSearch} className="flex form-control w-auto">
          <input
            type="text"
            placeholder="Search"
            className="flex input text-accent input-bordered focus:border-primary-focus border-2 rounded-[5px] w-28 sm:w-auto"
            value={search}
            onChange={inputChange}
          />
        </form>
      </div>
    </div>
  );
}
