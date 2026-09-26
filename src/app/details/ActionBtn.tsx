"use client";

import { workoutData } from "@/types/WorkoutData";
import { LuBookmark } from "react-icons/lu";
import buttonIcon from "@/assets/details/button_icon.png";
import Image from "next/image";
import { useWorkoutPlan } from "@/context/WorkoutPlanContext";
import {
  showSuccessToast,
  showWarningToast,
} from "@/components/customToast/ToastProvider";

interface ActionButtonsProps {
  item: workoutData;
}

export default function ActionButtons({ item }: ActionButtonsProps) {
  const { handleAddTodaysPlan, handleAddSaved } = useWorkoutPlan();

  const handleAddToPlan = () => {
    const added = handleAddTodaysPlan(item);
    if (added) {
      showSuccessToast(
        "Added to plan",
        `"${item.name}" is now in today's plan.`,
      );
    } else {
      showWarningToast(
        "Already added",
        `"${item.name}" is already in today's plan.`,
      );
    }
  };

  const handleSaveForLater = () => {
    const added = handleAddSaved(item);
    if (added) {
      showSuccessToast("Saved", `"${item.name}" has been saved for later.`);
    } else {
      showWarningToast("Already saved", `"${item.name}" is already saved.`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center font-secondary">
      <button
        onClick={handleAddToPlan}
        className="bg-brand px-6 py-3 rounded-xl text-[#0F1115] font-semibold leading-5 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
      >
        <Image src={buttonIcon} alt="#buttonIcon" />
        <p> Add to today's plan</p>
      </button>

      <button
        onClick={handleSaveForLater}
        className="text-[#E5E7EB] px-6 py-3 rounded-xl border border-[#374151] font-medium leading-5 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
      >
        <LuBookmark />
        <p> Save for later</p>
      </button>
    </div>
  );
}
