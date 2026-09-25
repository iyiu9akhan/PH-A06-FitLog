import React from "react";
import Container from "../Container";
import demo from "@/assets/card/demo.png";
import Image from "next/image";
import clock_icon from "@/assets/card/clock.png";
import star_icon from "@/assets/card/star.png";
import progress_icon from "@/assets/card/progress.png";

function LibraryCard() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-x-6.25 gap-y-[24.5px] mb-19.5">
        <div className="rounded-2xl bg-[#15171D]">
          <Image src={demo} alt="#card_img" className="rounded-t-2xl" />
          <div className="p-6">
            <div className="font-secondary font-bold text-[11px] capitalize flex items-center gap-2 text-black mb-3">
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                chest
              </p>
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                arms
              </p>
            </div>
            <h1 className="uppercase font-primary font-bold text-[18px] leading-7 tracking-[0.45px] text-title mb-1">
              barbell bench press
            </h1>
            <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-4">
              Barbell, Bench
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  25 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  180 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#15171D]">
          <Image src={demo} alt="#card_img" className="rounded-t-2xl" />
          <div className="p-6">
            <div className="font-secondary font-bold text-[11px] capitalize flex items-center gap-2 text-black mb-3">
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                chest
              </p>
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                arms
              </p>
            </div>
            <h1 className="uppercase font-primary font-bold text-[18px] leading-7 tracking-[0.45px] text-title mb-1">
              barbell bench press
            </h1>
            <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-4">
              Barbell, Bench
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  25 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  180 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#15171D]">
          <Image src={demo} alt="#card_img" className="rounded-t-2xl" />
          <div className="p-6">
            <div className="font-secondary font-bold text-[11px] capitalize flex items-center gap-2 text-black mb-3">
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                chest
              </p>
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                arms
              </p>
            </div>
            <h1 className="uppercase font-primary font-bold text-[18px] leading-7 tracking-[0.45px] text-title mb-1">
              barbell bench press
            </h1>
            <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-4">
              Barbell, Bench
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  25 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  180 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#15171D]">
          <Image src={demo} alt="#card_img" className="rounded-t-2xl" />
          <div className="p-6">
            <div className="font-secondary font-bold text-[11px] capitalize flex items-center gap-2 text-black mb-3">
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                chest
              </p>
              <p className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full">
                arms
              </p>
            </div>
            <h1 className="uppercase font-primary font-bold text-[18px] leading-7 tracking-[0.45px] text-title mb-1">
              barbell bench press
            </h1>
            <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-4">
              Barbell, Bench
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  25 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  180 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle">
                  4.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LibraryCard;
