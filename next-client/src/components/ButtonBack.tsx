"use client";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
  let router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="btn btn-error w-fit">
      Go Back
    </button>
  );
}
