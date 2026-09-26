import React from "react";
import Container from "../Container";
import Image from "next/image";
import clock_icon from "@/assets/card/clock.png";
import star_icon from "@/assets/card/star.png";
import progress_icon from "@/assets/card/progress.png";
import Link from "next/link";
import { getAllWorkouts } from "@/lib/getWorkouts";

const LibraryCard = async () => {
  const data = await getAllWorkouts();

  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6.25 gap-y-[24.5px] mb-10 md:mb-19.5">
        {data.map((item) => (
          <Link href={`./details/${item.id}`} key={item.id}>
            <div className="rounded-2xl bg-[#15171D] group hover:border hover:border-brand/50 border border-[#15171D] duration-300">
              <div className="relative w-full h-50 rounded-t-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="font-secondary font-bold text-[11px] capitalize flex items-center gap-2 text-black mb-3">
                  {item.muscleGroups.map((group, index) => (
                    <p
                      key={index}
                      className="leading-[16.5px] px-2.5 py-0.5 bg-brand rounded-full"
                    >
                      {group}
                    </p>
                  ))}
                </div>
                <h1 className="uppercase font-primary font-bold text-[18px] leading-7 tracking-[0.45px] text-title mb-1">
                  {item.name}
                </h1>
                <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-4">
                  {item.equipment}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Image src={clock_icon} alt="clock icon" />
                    <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle group-hover:text-brand duration-300">
                      {item.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src={progress_icon} alt="calories icon" />
                    <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle group-hover:text-brand duration-300">
                      {item.caloriesBurned} kcal
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src={star_icon} alt="rating icon" />
                    <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle group-hover:text-brand duration-300">
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default LibraryCard;