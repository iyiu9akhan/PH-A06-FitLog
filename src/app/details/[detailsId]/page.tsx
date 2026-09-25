import Container from "@/components/Container";
import React from "react";
import detailsDemo from "@/assets/details/details_demo.png";
import buttonIcon from "@/assets/details/button_icon.png";
import Image from "next/image";
import { LuBookmark } from "react-icons/lu";
import { workoutData } from "@/types/WorkoutData";

interface PageProps {
  params: Promise<{
    detailsId: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { detailsId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${detailsId}`,
  );
  const data: workoutData = await res.json();
  // console.log(data.length);

  return (
    <>
      <Container>
        {/* {data.map((item) => (
        ))} */}
        <div className="mb-12 mt-32 mx-6 flex justify-between">
          <div>
            {/* <Image
                src={detailsDemo}
                alt="#details_demo_img"
                className="rounded-2xl"
              /> */}
            <Image
              src={data.image}
              alt={data.name}
              width={588}
              height={735}
              className="rounded-t-2xl w-147 h-183.75 object-cover rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-primary font-bold text-[36px] leading-10 tracking-[-0.9px] text-title mb-3">
              {data.name}
            </h1>
            <p className="max-w-xl font-secondary font-normal text-[16px] leading-6 text-subTitle mb-5">
              {data.description}
            </p>
            <div className="font-secondary font-semibold text-[12px] leading-4 text-[#0F1115] flex items-center gap-2.5 rounded capitalize mb-7">
              {data.muscleGroups.map((group, index) => (
                <p
                  key={index}
                  className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full"
                >
                  {group}
                </p>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#232834] bg-[#151922] mb-8">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4  border-[#1E2330]">
                      EQUIPMENT
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                    {data.equipment}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      DIFFICULTY
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                     {data.difficulty}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      SETS
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      {data.sets}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      REPS
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                     {data.reps}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      DURATION
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      {data.duration} min
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      CALORIES
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                      {data.caloriesBurned} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className="font-secondary font-bold text-[12px] leading-4 tracking-[0.6px] text-subTitle uppercase px-6 py-4 border-[#1E2330]">
                      RATING
                    </td>
                    <td className="text-end font-secondary text-[14px] leading-5 text-[#E5E7EB] px-6 py-4 border-[#1E2330]">
                    {data.rating}
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
};

export default page;
