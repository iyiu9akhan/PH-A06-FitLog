import Container from "@/components/Container";
import React from "react";
import detailsDemo from "@/assets/details/details_demo.png";
import buttonIcon from "@/assets/details/button_icon.png";
import Image from "next/image";
import { LuBookmark } from "react-icons/lu";

function page() {
  return (
    <>
      <Container>
        <div className="mb-12 mt-32 mx-6 flex justify-between ">
          <div>
            <Image
              src={detailsDemo}
              alt="#details_demo_img"
              className="rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-primary font-bold text-[36px] leading-10 tracking-[-0.9px] text-title mb-3">
              BARBELL BENCH PRESS
            </h1>
            <p className="max-w-xl font-secondary font-normal text-[16px] leading-6 text-subTitle mb-5">
              A compound press that builds chest thickness, triceps, and
              pressing power from a stable bench.
            </p>
            <div className="font-secondary font-semibold text-[12px] leading-4 text-[#0F1115] flex items-center gap-2.5 rounded capitalize mb-7">
              <p className="bg-brand px-3.5 py-1 leading-4 rounded-full">
                chest
              </p>
              <p className="bg-brand px-3.5 py-1 leading-4 rounded-full">
                arms
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#232834] bg-[#151922] mb-8">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4  border-[#1E2330]">
                      EQUIPMENT
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      Barbell, Bench
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      DIFFICULTY
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      Intermediate
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      SETS
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      4
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      REPS
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      6-8
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      DURATION
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      25 min
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      CALORIES
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      180 kcal
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      RATING
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      4.8
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="font-secondary font-extrabold text-[16px] leading-6 tracking-[0.8px] text-title mb-4">
              INSTRUCTIONS
            </h1>
            <ol className="list-decimal list-inside space-y-3 font-secondary text-[14px]  leading-[22.8px] text-[#D1D5DB] mb-9">
              <li>
                Lie on the bench with eyes under the bar and feet planted.
              </li>
              <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
              <li>
                Press up in a slight arc until elbows lock without bouncing.
              </li>
              <li>
                Keep shoulder blades pinched and a natural arch in the back.
              </li>
            </ol>
            <div className="flex gap-4 items-center font-secondary">
              <button className="bg-brand px-6 py-3 rounded-xl text-[#0F1115] font-semibold leading-5 cursor-pointer flex items-center gap-2">
                <Image src={buttonIcon} alt="#buttonIcon" />
                <p> Add to today's plan</p>
              </button>
              <button className="text-[#E5E7EB] px-6 py-3 rounded-xl border border-[#374151] font-medium leading-5 cursor-pointer flex items-center gap-2">
                <LuBookmark />
                <p> Save for later</p>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;
