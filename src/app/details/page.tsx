import Container from "@/components/Container";
import React from "react";
import detailsDemo from "@/assets/details_demo.png";
import Image from "next/image";

function page() {
  return (
    <>
      <Container>
        <div className="mt-12 mx-6 flex justify-between ">
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
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mb-8">
              <table className="table">
                <tbody>
                  <tr>
                    <td>EQUIPMENT</td>
                    <td className="text-end">Barbell, Bench</td>
                  </tr>
                  <tr>
                    <td>DIFFICULTY</td>
                    <td className="text-end">Intermediate</td>
                  </tr>
                  <tr>
                    <td>SETS</td>
                    <td className="text-end">4</td>
                  </tr>
                  <tr>
                    <td>REPS</td>
                    <td className="text-end">6-8</td>
                  </tr>
                  <tr>
                    <td>DURATION</td>
                    <td className="text-end">25 min</td>
                  </tr>
                  <tr>
                    <td>CALORIES</td>
                    <td className="text-end">180 kcal</td>
                  </tr>
                  <tr>
                    <td>RATING</td>
                    <td className="text-end">4.8</td>
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
              <button className="bg-brand px-6 py-3 rounded-xl text-[#0F1115] font-semibold leading-5 cursor-pointer">
                Add to today's plan
              </button>
              <button className="text-[#E5E7EB] px-6 py-3 rounded-xl border border-[#374151] font-medium leading-5 cursor-pointer">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;
