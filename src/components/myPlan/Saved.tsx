"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import clock_icon from "@/assets/todaysPlan/clock.png";
import progress_icon from "@/assets/todaysPlan/progress.png";
import star_icon from "@/assets/todaysPlan/star.png";
import { workoutData } from "@/types/WorkoutData";
import { toast } from "react-toastify";

interface SavedProps {
  savedWorkouts: workoutData[];
  isLoading: boolean;
  onRemove: (id: string | number) => void;
}

function Saved({ savedWorkouts, isLoading, onRemove }: SavedProps) {
  if (isLoading) {
    return (
      <div className="bg-[#101216] border border-dashed border-title/10 rounded-xl px-4 py-24.25 flex flex-col items-center justify-center mb-10 gap-3">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin mb-5"></div>
        <p className="font-secondary font-medium text-[14px] leading-5 text-subTitle tracking-wide">
          Loading saved workouts...
        </p>
      </div>
    );
  }
  const handleRemove = (item: workoutData) => {
    onRemove(item.id);
    toast.info(`"${item.name}" removed from saved workouts.`);
  };

  if (savedWorkouts.length === 0) {
    return (
      <div className="bg-[#101216] border border-dashed border-title/10 rounded-xl px-4 py-24.25 flex flex-col items-center mb-10">
        <h1 className="font-primary font-bold text-[20px] leading-5 tracking-[0.7px] text-title mb-2 uppercase">
          nothing here yet
        </h1>
        <p className="font-secondary font-normal text-[12px] leading-4 text-subTitle mb-6">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="./"
          className="font-secondary font-semibold text-[12px] leading-4 tracking-[-0.3px] text-black px-6 py-2.5 rounded-full bg-brand"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-y-4 mb-10">
      {savedWorkouts.map((item, index) => (
        <div
          key={item.id !== undefined ? item.id : index}
          className="p-4 rounded-2xl bg-[#14171E] flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={144}
              height={80}
              className="h-20 w-36 rounded-xl object-cover"
            />
            <div>
              <h1 className="font-primary font-bold text-[16px] leading-6 tracking-[0.4px] text-title mb-0.5 uppercase">
                {item.name}
              </h1>
              <p className="font-secondary font-semibold text-[12px] leading-4 text-subTitle capitalize mb-2">
                {item.equipment}
              </p>
              <div className="flex items-center gap-[9.34px]">
                <div className="flex items-center gap-1.5">
                  <Image src={clock_icon} alt="#progress_icon" />
                  <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                    {item.duration} min
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image src={progress_icon} alt="#progress_icon" />
                  <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                    {item.caloriesBurned} kcal
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image src={star_icon} alt="#progress_icon" />
                  <p className="font-secondary font-normal text-[12px] leading-4 text-[#D1D5DB]">
                    {item.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`./details/${item.id}`}
              className="font-secondary font-normal text-[12px] leading-4 text-title capitalize px-4.5 py-2.25 rounded-full border border-[#374151] cursor-pointer"
            >
              view details
            </Link>
            <FaPlus
              color="#6B7280"
              size={22}
              onClick={() => handleRemove(item)}
              className="rotate-45 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Saved;
