"use client";

import ButtonCTA from "@/components/ButtonCTA";
import Link from "next/link";

export default function Error({ error }: { error: Error; reset: () => void }) {
  let message = "Oops! Maybe the episode is not there, is it?";

  return (
    <div className="w-screen h-[60vh] flex flex-auto flex-col gap-4 p-8">
      <h2 className="text-2xl font-semibold">{message}</h2>
      <div>
        <Link href={"/"}>
          <ButtonCTA shadow={"medium"} title={"Back to home?"} />
        </Link>
      </div>
    </div>
  );
}
