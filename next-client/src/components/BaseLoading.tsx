"use client";

export default function LoadingPage() {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center">
      <div className="flex absolute w-screen h-screen z-10 opacity-20 blur-3xl bg-white"></div>
      <button className="z-20 flex flex-row btn btn-accent btn-outline border-2 gap-2 loading">
        <strong className="text-accent align-middle text-center">
          Loading...
        </strong>
      </button>
    </div>
  );
}
