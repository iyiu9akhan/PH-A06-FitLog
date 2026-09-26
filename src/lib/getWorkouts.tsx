import fs from "fs/promises";
import path from "path";
import { workoutData } from "@/types/WorkoutData";

// const API_BASE = "https://api.abcz.workers.dev/api/fitlog";
const API_BASE = "https://api.api-store.workers.dev/api/fitlog";

async function getLocalData(): Promise<workoutData[]> {
  const filePath = path.join(process.cwd(), "public", "data", "fitlog.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export async function getAllWorkouts(): Promise<workoutData[]> {
  try {
    const res = await fetch(API_BASE, { cache: "no-store" });
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    console.log("✅ Data source: LIVE API (getAllWorkouts)");
    return data;
  } catch (error) {
    console.log("Data source: LOCAL FALLBACK (getAllWorkouts)", error);
    return await getLocalData();
  }
}

export async function getWorkoutById(id: string): Promise<workoutData> {
  try {
    const res = await fetch(`${API_BASE}/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    console.log(`✅ Data source: LIVE API (getWorkoutById: ${id})`);
    return data;
  } catch (error) {
    console.log(`Data source: LOCAL FALLBACK (getWorkoutById: ${id})`, error);
    const allData = await getLocalData();
    const item = allData.find((w) => String(w.id) === String(id));
    if (!item) throw new Error("Workout not found");
    return item;
  }
}