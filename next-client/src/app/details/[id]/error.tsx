"use client";

import ButtonCTA from "@/components/ButtonCTA";
import Link from "next/link";

export default function Error({ error }: { error: Error; reset: () => void }) {
  let message = error.message.match(/(404)/i)
    ? "Trying to do something naughty, you do"
    : "Sorry! something maybe broken";

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
