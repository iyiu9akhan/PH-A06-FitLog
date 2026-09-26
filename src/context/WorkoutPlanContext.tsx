"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { workoutData } from "@/types/WorkoutData";

interface WorkoutPlanContextType {
  todaysPlan: workoutData[];
  savedWorkouts: workoutData[];
  isLoading: boolean;
  handleRemoveTodaysPlan: (id: string | number) => void;
  handleRemoveSaved: (id: string | number) => void;
  handleAddTodaysPlan: (workout: workoutData) => boolean;
  handleAddSaved: (workout: workoutData) => boolean;
}

const WorkoutPlanContext = createContext<WorkoutPlanContextType | undefined>(undefined);

export function WorkoutPlanProvider({ children }: { children: ReactNode }) {
  const [todaysPlan, setTodaysPlan] = useState<workoutData[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<workoutData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedPlan = JSON.parse(localStorage.getItem("todaysPlan") || "[]");
      const storedSaved = JSON.parse(localStorage.getItem("savedWorkouts") || "[]");
      setTodaysPlan(storedPlan);
      setSavedWorkouts(storedSaved);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleRemoveTodaysPlan = (id: string | number) => {
    setTodaysPlan((prev) => {
      const updated = prev.filter((workout) => workout.id !== id);
      localStorage.setItem("todaysPlan", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveSaved = (id: string | number) => {
    setSavedWorkouts((prev) => {
      const updated = prev.filter((workout) => workout.id !== id);
      localStorage.setItem("savedWorkouts", JSON.stringify(updated));
      return updated;
    });
  };

  const handleAddTodaysPlan = (workout: workoutData) => {
    let added = false;
    setTodaysPlan((prev) => {
      const exists = prev.some((item) => item.id === workout.id);
      if (exists) return prev;
      added = true;
      const updated = [...prev, workout];
      localStorage.setItem("todaysPlan", JSON.stringify(updated));
      return updated;
    });
    return added;
  };

  const handleAddSaved = (workout: workoutData) => {
    let added = false;
    setSavedWorkouts((prev) => {
      const exists = prev.some((item) => item.id === workout.id);
      if (exists) return prev;
      added = true;
      const updated = [...prev, workout];
      localStorage.setItem("savedWorkouts", JSON.stringify(updated));
      return updated;
    });
    return added;
  };

  return (
    <WorkoutPlanContext.Provider
      value={{
        todaysPlan,
        savedWorkouts,
        isLoading,
        handleRemoveTodaysPlan,
        handleRemoveSaved,
        handleAddTodaysPlan,
        handleAddSaved,
      }}
    >
      {children}
    </WorkoutPlanContext.Provider>
  );
}

export function useWorkoutPlan() {
  const ctx = useContext(WorkoutPlanContext);
  if (!ctx) {
    throw new Error("useWorkoutPlan must be used inside WorkoutPlanProvider");
  }
  return ctx;
}