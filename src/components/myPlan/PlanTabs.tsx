"use client";

import Saved from "@/components/myPlan/Saved";
import TodaysPlan from "@/components/myPlan/TodaysPlan";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = ["Duration", "Calories", "Rating"];

function PlanTabs() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState("Duration");
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        {/* Tabs */}
        <div className="bg-[#151921] border border-[#232732] rounded-xl inline-flex items-center gap-0.5 px-1 py-1.25">
          <p
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "font-secondary font-bold text-[12px] leading-4 text-title capitalize px-4 py-1.5 bg-[#1F242D] border border-[#2B303D] rounded-lg cursor-pointer"
                : "font-secondary font-normal text-[12px] leading-4 text-[#8A92A0] capitalize px-4 py-1.5 rounded-lg cursor-pointer"
            }
          >
            today&apos;s plan
          </p>
          <p
            onClick={() => setActiveTab("saved")}
            className={
              activeTab === "saved"
                ? "font-secondary font-bold text-[12px] leading-4 text-title capitalize px-9 py-1.75 bg-[#1F242D] border border-[#2B303D] rounded-lg cursor-pointer"
                : "font-secondary font-normal text-[12px] leading-4 text-[#8A92A0] capitalize px-9 py-1.75 rounded-lg cursor-pointer"
            }
          >
            saved
          </p>
        </div>

        {/* Sort By */}
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

      {activeTab === "plan" ? <TodaysPlan /> : <Saved />}
    </>
  );
}

export default PlanTabs;