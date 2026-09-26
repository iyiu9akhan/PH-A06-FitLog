"use client";

import React from "react";
import { workoutData } from "@/types/WorkoutData";
import { LuBookmark } from "react-icons/lu";
import buttonIcon from "@/assets/details/button_icon.png";
import Image from "next/image";
import { toast } from "react-toastify";
import { useWorkoutPlan } from "@/context/WorkoutPlanContext";

interface ActionButtonsProps {
  item: workoutData;
}

export default function ActionButtons({ item }: ActionButtonsProps) {
  const { handleAddTodaysPlan, handleAddSaved } = useWorkoutPlan();

  const handleAddToPlan = () => {
    const added = handleAddTodaysPlan(item);
    if (added) {
      toast.success("Successfully added to today's plan!");
    } else {
      toast.info("This workout is already in your today's plan!");
    }
  };

  const handleSaveForLater = () => {
    const added = handleAddSaved(item);
    if (added) {
      toast.success("Successfully saved for later!");
    } else {
      toast.info("This workout is already saved!");
    }
  };

  return (
    <div className="flex gap-4 items-center font-secondary">
      <button
        onClick={handleAddToPlan}
        className="bg-brand px-6 py-3 rounded-xl text-[#0F1115] font-semibold leading-5 cursor-pointer flex items-center gap-2"
      >
        <Image src={buttonIcon} alt="#buttonIcon" />
        <p> Add to today's plan</p>
      </button>

      <button
        onClick={handleSaveForLater}
        className="text-[#E5E7EB] px-6 py-3 rounded-xl border border-[#374151] font-medium leading-5 cursor-pointer flex items-center gap-2"
      >
        <LuBookmark />
        <p> Save for later</p>
      </button>
    </div>
  );
}
