"use client";

import Saved from "@/components/myPlan/Saved";
import TodaysPlan from "@/components/myPlan/TodaysPlan";
import { useState } from "react";

function PlanTabs() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  return (
    <>
      <div className="bg-[#151921] border border-[#232732] rounded-xl inline-flex items-center gap-0.5 px-1 py-1.25 mb-6">
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

      {activeTab === "plan" ? <TodaysPlan /> : <Saved />}
    </>
  );
}

export default PlanTabs;