"use client";
import { useState, useTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  const handleRetry = () => {
    startTransition(() => {
      reset();
    });
  };

  return (
    <div className="min-h-[calc(100vh-101px)] w-full flex items-center justify-center px-4">
      <div className="border border-dashed border-title/10 rounded-xl p-12 flex flex-col items-center max-w-md w-full text-center">
        <h1 className="font-primary font-bold text-6xl text-red-500 mb-4">
          !
        </h1>
        <h2 className="font-primary font-bold text-[20px] text-title mb-2 uppercase">
          Something Went Wrong
        </h2>
        <p className="font-secondary font-normal text-[12px] text-subTitle mb-6">
          Could not load workout data. This might be a temporary issue with
          the server. Please try again.
        </p>
        <button
          onClick={handleRetry}
          disabled={isPending}
          className="font-secondary font-semibold text-[12px] text-black px-6 py-2.5 rounded-full bg-brand hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 min-w-27.5 justify-center"
        >
          {isPending ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Retrying...
            </>
          ) : (
            "Try Again"
          )}
        </button>
      </div>
    </div>
  );
}