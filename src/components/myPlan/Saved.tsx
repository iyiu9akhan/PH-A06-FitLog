import React from "react";
import Link from "next/link";
import Container from "../Container";

function Saved() {
  return (
    <div className="bg-[#101216] border border-dashed border-title/10 rounded-xl px-4 py-24.25 flex flex-col items-center mb-10">
      <h1 className="font-primary font-bold text-[20px] leading-5 tracking-[0.7px] text-title mb-2 uppercase">
        nothing here yet
      </h1>
      <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-6">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="./"
        className="font-secondary font-semibold text-[12px] leading-4 tracking-[-0.3px] text-black px-6 py-2.5 rounded-full bg-brand"
      >
        Go to workouts
      </Link>
    </div>
  );
}

export default Saved;
