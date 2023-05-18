"use client";

export default function LoadingPage() {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center">
      <div className="flex absolute w-screen h-screen z-10 opacity-20 blur-3xl bg-white"></div>
      <button className="z-20 flex flex-row btn btn-outline gap-2" disabled>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <strong className="text-accent align-middle text-center">
          Loading...
        </strong>
      </button>
    </div>
  );
}
