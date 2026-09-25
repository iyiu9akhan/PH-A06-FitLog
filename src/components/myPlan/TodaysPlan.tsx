import React from "react";
import demoImg from "@/assets/todaysPlan/demo.png";
import clock_icon from "@/assets/todaysPlan/clock.png";
import progress_icon from "@/assets/todaysPlan/progress.png";
import star_icon from "@/assets/todaysPlan/star.png";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function TodaysPlan() {
  return (
    <div className="grid gap-y-4">
      <div className="p-4 rounded-2xl bg-[#14171E] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={demoImg}
            alt="#demoImg"
            className="h-20 w-36 rounded-xl"
          />
          <div>
            <h1 className="font-primary font-bold text-[16px] leading-6 tracking-[0.4px] text-title mb-0.5 uppercase">
              russian twist
            </h1>
            <p className="font-secondary font-semibold text-[12px] leading-4 text-subTitle capitalize mb-2">
              medicine ball
            </p>
            <div className="flex items-center gap-[9.34px]">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  8 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  70 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  4.1
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="font-secondary font-normal text-[12px] leading-4 text-title capitalize px-4.5 py-2.25 rounded-full border border-[#374151] cursor-pointer">
            view details
          </button>
          <button className="font-secondary font-semibold text-[12px] leading-4  px-4.5 py-2.25 rounded-full border border-[#374151] flex items-center gap-1.5 bg-brand text-black cursor-pointer">
            <IoMdCheckmark size={18} />
            Mark as Done
          </button>
          <FaPlus
            color="#6B7280"
            size={22}
            className="rotate-45 cursor-pointer"
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#14171E] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={demoImg}
            alt="#demoImg"
            className="h-20 w-36 rounded-xl"
          />
          <div>
            <h1 className="font-primary font-bold text-[16px] leading-6 tracking-[0.4px] text-title mb-0.5 uppercase">
              russian twist
            </h1>
            <p className="font-secondary font-semibold text-[12px] leading-4 text-subTitle capitalize mb-2">
              medicine ball
            </p>
            <div className="flex items-center gap-[9.34px]">
              <div className="flex items-center gap-1.5">
                <Image src={clock_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  8 min
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={progress_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  70 kcal
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={star_icon} alt="#progress_icon" />
                <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                  4.1
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="font-secondary font-normal text-[12px] leading-4 text-title capitalize px-4.5 py-2.25 rounded-full border border-[#374151] cursor-pointer">
            view details
          </button>
          <button className="font-secondary font-semibold text-[12px] leading-4  px-4.5 py-2.25 rounded-full border border-[#374151] flex items-center gap-1.5 bg-brand text-black cursor-pointer">
            <IoMdCheckmark size={18} />
            Mark as Done
          </button>
          <FaPlus
            color="#6B7280"
            size={22}
            className="rotate-45 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default TodaysPlan;
