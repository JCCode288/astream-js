"use client";

import ButtonCTA from "@/components/ButtonCTA";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorMainPage({ error }: any) {
  const router = useRouter();
  const handleRefresh = () => {
    router.refresh();
  };
  let message = "I think something is broken. Maybe check your connection?";

  return (
    <div className="w-screen h-[60vh] flex flex-auto flex-col gap-4 p-8">
      <h2 className="text-2xl font-semibold">{message}</h2>
      <div>
        <Link href={"/"}>
          <ButtonCTA
            shadow={"medium"}
            title={"Refresh Page"}
            actions={handleRefresh}
          />
        </Link>
      </div>
    </div>
  );
}
