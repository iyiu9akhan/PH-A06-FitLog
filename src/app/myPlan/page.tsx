"use client";
import Container from "@/components/Container";
import MyPlanStats from "@/components/myPlan/MyPlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import { useWorkoutPlan } from "@/context/WorkoutPlanContext";
import { useState } from "react";

function pages() {
  const {
    todaysPlan,
    savedWorkouts,
    isLoading,
    handleRemoveTodaysPlan,
    handleRemoveSaved,
  } = useWorkoutPlan();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const statsData = activeTab === "plan" ? todaysPlan : savedWorkouts;

  return (
    <>
      <Container>
        <div className="mx-6 mt-32">
          <h1 className="uppercase font-primary font-bold text-[30px] leading-9 tracking-[-0.75px] mb-2">
            my plan
          </h1>
          <p className="font-secondary font-normal text-[14px] leading-5 text-subTitle mb-6">
            Cap of five lifts for today. Finish them, then load more.
          </p>
          <MyPlanStats todaysPlan={statsData} isLoading={isLoading} />
          <PlanTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            todaysPlan={todaysPlan}
            savedWorkouts={savedWorkouts}
            isLoading={isLoading}
            onRemoveTodaysPlan={handleRemoveTodaysPlan}
            onRemoveSaved={handleRemoveSaved}
          />
        </div>
      </Container>
    </>
  );
}

export default pages;