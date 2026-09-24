import React from "react";
import Container from "./Container";
import Image from "next/image";
import bannerImg from "@/assets/banner/banner.png";
import Link from "next/link";

function Banner() {
  return (
    <Container>
      <div className="mx-3 md:mx-6 mt-6 md:mt-12 mb-8 md:mb-16 px-7 md:px-14 py-9 md:py-18.25 bg-[#15171D] rounded-2xl  md:flex justify-between items-center">
        <div>
          <p className="font-secondary font-bold text-[11px] leading-[16.5px] tracking-[1.1px] text-brand mb-5">
            WORKOUT LIBRARY
          </p>
          <h1 className="max-w-139.5 font-primary font-extrabold text-[28px] md:text-[60px] md:leading-15 tracking-[-1.5px] text-title mb-5">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="font-secondary font-normal text-[14px] md:text-[16px] leading-6 text-subTitle max-w-lg mb-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <Link
            href="/"
            className="font-secondary font-bold text-[10px] md:text-[12px] leading-4 tracking-[0.3px] text-[#000000] uppercase px-6 py-3 rounded-md bg-brand"
          >
            browser workouts
          </Link>
        </div>
        <div className="mt-20 md:mt-0">
          <Image src={bannerImg} alt="#banner_img" />
        </div>
      </div>
    </Container>
  );
}

export default Banner;
