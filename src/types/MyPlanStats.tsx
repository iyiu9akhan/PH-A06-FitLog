import { workoutData } from "./WorkoutData";

export interface MyPlanStatsProps {
  todaysPlan: workoutData[];
  isLoading: boolean;
}