"use client";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
  let router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="btn btn-error w-fit rounded-sm btn-outline border-2 shadow-sm"
    >
      Go Back
    </button>
  );
}
