"use client";

import React from "react";
import { workoutData } from "@/types/WorkoutData";
import { LuBookmark } from "react-icons/lu";
import buttonIcon from "@/assets/details/button_icon.png";
import Image from "next/image";

interface ActionButtonsProps {
  item: workoutData;
}

export default function ActionButtons({ item }: ActionButtonsProps) {
  const handleAddToPlan = () => {
    const existingPlan = JSON.parse(localStorage.getItem("todaysPlan") || "[]");
    const isAlreadyAdded = existingPlan.some(
      (workout: workoutData) => workout.id === item.id,
    );

    if (!isAlreadyAdded) {
      const updatedPlan = [...existingPlan, item];
      localStorage.setItem("todaysPlan", JSON.stringify(updatedPlan));
      alert("Successfully added to today's plan!");
    } else {
      alert("This workout is already in your today's plan!");
    }
  };

  const handleSaveForLater = () => {
    const existingSaved = JSON.parse(
      localStorage.getItem("savedWorkouts") || "[]",
    );
    const isAlreadySaved = existingSaved.some(
      (workout: workoutData) => workout.id === item.id,
    );

    if (!isAlreadySaved) {
      const updatedSaved = [...existingSaved, item];
      localStorage.setItem("savedWorkouts", JSON.stringify(updatedSaved));
      alert("Successfully saved for later!");
    } else {
      alert("This workout is already saved!");
    }
  };

  return (
    <div className="flex gap-4 items-center font-secondary">
      {/* onClick add kora hoyeche */}
      <button 
        onClick={handleAddToPlan}
        className="bg-brand px-6 py-3 rounded-xl text-[#0F1115] font-semibold leading-5 cursor-pointer flex items-center gap-2"
      >
        <Image src={buttonIcon} alt="#buttonIcon" />
        <p> Add to today's plan</p>
      </button>

      {/* onClick add kora hoyeche */}
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