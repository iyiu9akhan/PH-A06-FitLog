"use client";
import Saved from "@/components/myPlan/Saved";
import TodaysPlan from "@/components/myPlan/TodaysPlan";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { workoutData } from "@/types/WorkoutData";

const sortOptions = ["Duration", "Calories", "Rating"];

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
  todaysPlan: workoutData[];
  savedWorkouts: workoutData[];
  isLoading: boolean;
  onRemoveTodaysPlan: (id: string | number) => void;
  onRemoveSaved: (id: string | number) => void;
}

function PlanTabs({
  activeTab,
  setActiveTab,
  todaysPlan,
  savedWorkouts,
  isLoading,
  onRemoveTodaysPlan,
  onRemoveSaved,
}: PlanTabsProps) {
  const [sortBy, setSortBy] = useState("Duration");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortWorkouts = (list: workoutData[]) => {
    const sorted = [...list];
    if (sortBy === "Duration") {
      sorted.sort((a, b) => Number(a.duration || 0) - Number(b.duration || 0));
    } else if (sortBy === "Calories") {
      sorted.sort(
        (b, a) => Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0),
      );
    } else if (sortBy === "Rating") {
      sorted.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
    }
    return sorted;
  };

  const sortedTodaysPlan = sortWorkouts(todaysPlan);
  const sortedSavedWorkouts = sortWorkouts(savedWorkouts);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between mb-6">
        <div className="bg-[#151921] border border-[#232732] rounded-xl inline-flex items-center gap-0.5 px-1 py-1.25">
          <p
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "font-secondary font-bold text-[12px] leading-4 text-brand capitalize px-4 py-1.5 bg-[#1F242D] border border-[#2B303D] rounded-lg cursor-pointer"
                : "font-secondary font-normal text-[12px] leading-4 text-[#8A92A0] capitalize px-4 py-1.5 rounded-lg cursor-pointer"
            }
          >
            today's plan
          </p>
          <p
            onClick={() => setActiveTab("saved")}
            className={
              activeTab === "saved"
                ? "font-secondary font-bold text-[12px] leading-4 text-brand capitalize px-9 py-1.5 bg-[#1F242D] border border-[#2B303D] rounded-lg cursor-pointer"
                : "font-secondary font-normal text-[12px] leading-4 text-[#8A92A0] capitalize px-9 py-1.5 rounded-lg cursor-pointer"
            }
          >
            saved
          </p>
        </div>

        <div className="flex items-center gap-3 relative">
          <span className="font-secondary font-normal text-[13px] leading-4 text-subTitle">
            Sort By
          </span>
          <button
            onClick={() => setIsSortOpen((prev) => !prev)}
            className="flex items-center gap-2 font-secondary font-medium text-[13px] leading-4 text-title bg-[#13161D] border border-[#232732] rounded-lg px-4 py-2.5 cursor-pointer"
          >
            {sortBy}
            <ChevronDown
              size={14}
              className={`text-subTitle transition-transform ${
                isSortOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 bg-[#13161D] border border-[#232732] rounded-lg overflow-hidden z-10 min-w-35">
              {sortOptions.map((option) => (
                <p
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setIsSortOpen(false);
                  }}
                  className={
                    sortBy === option
                      ? "font-secondary font-semibold text-[13px] leading-4 text-brand px-4 py-2.5 cursor-pointer hover:bg-[#1F242D]"
                      : "font-secondary font-normal text-[13px] leading-4 text-title px-4 py-2.5 cursor-pointer hover:bg-[#1F242D]"
                  }
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {activeTab === "plan" ? (
        <TodaysPlan
          todaysPlan={sortedTodaysPlan}
          isLoading={isLoading}
          onRemove={onRemoveTodaysPlan}
        />
      ) : (
        <Saved
          savedWorkouts={sortedSavedWorkouts}
          isLoading={isLoading}
          onRemove={onRemoveSaved}
        />
      )}
    </>
  );
}

export default PlanTabs;