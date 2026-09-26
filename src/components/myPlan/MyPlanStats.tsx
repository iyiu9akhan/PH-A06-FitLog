"use client";
import { MyPlanStatsProps } from "@/types/MyPlanStats";

export default function MyPlanStats({
  todaysPlan,
  isLoading,
}: MyPlanStatsProps) {
  const totalExercises = todaysPlan.length;
  const totalMinutes = todaysPlan.reduce(
    (sum, item) => sum + Number(item.duration || 0),
    0,
  );
  const totalCalories = todaysPlan.reduce(
    (sum, item) => sum + Number(item.caloriesBurned || 0),
    0,
  );

  return (
    <div className="px-6 pt-8 pb-6 rounded-2xl grid grid-cols-3 items-center bg-[#13161D] divide-x divide-[#232732]/60 mb-8 border border-[#232732]">
      <div className="px-8 first:pl-0">
        <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle capitalize mb-1">
          exercises
        </p>
        <h1 className="font-primary font-bold text-[25px] md:text-[36px] leading-10 text-brand">
          {isLoading ? "-" : totalExercises}
        </h1>
      </div>
      <div className="px-8 first:pl-0">
        <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle capitalize mb-1">
          minutes
        </p>
        <h1 className="font-primary font-bold text-[25px] md:text-[36px] leading-10 text-title">
          {isLoading ? "-" : totalMinutes}
        </h1>
      </div>
      <div className="px-8 first:pl-0">
        <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle capitalize mb-1">
          calories
        </p>
        <h1 className="font-primary font-bold text-[25px] md:text-[36px] leading-10 text-title">
          {isLoading ? "-" : totalCalories}
        </h1>
      </div>
    </div>
  );
}
