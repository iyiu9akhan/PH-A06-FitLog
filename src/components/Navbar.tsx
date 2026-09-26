"use client";
import Container from "./Container";
import navbar_logo from "@/assets/navbar/navbar_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useWorkoutPlan } from "@/context/WorkoutPlanContext";

function Navbar() {
  const pathName = usePathname();
  const { todaysPlan, savedWorkouts } = useWorkoutPlan();
  const links_center = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathName === "/"
              ? "text-brand bg-[#1A2312] py-1.5 px-4 rounded-full"
              : "text-subTitle py-1.5 px-4"
          }
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={
            pathName === "/my-plan"
              ? "text-brand bg-[#1A2312] py-1.5 px-4 rounded-full"
              : "text-subTitle py-1.5 px-4"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );

  const links_end = (
    <>
      <Link
        href="/my-plan"
        className="text-[#D1D5DB] font-secondary font-medium text-[16px] md:text-[12px] leading-4 flex items-center gap-1.5 sm:gap-2 capitalize"
      >
        plan{" "}
        <span className="px-2 py-1 md:px-1.5 md:py-0.5 rounded-full bg-brand font-bold text-[13px] md:text-[11px] text-[#000000]">
          {todaysPlan.length}
        </span>
      </Link>
      <Link
        href="/my-plan"
        className="text-subTitle font-secondary font-medium text-[16px] md:text-[12px] leading-4 flex items-center gap-1.5 sm:gap-2 capitalize"
      >
        saved{" "}
        <span className="px-2 py-1 md:px-1.5 md:py-0.5 rounded-full border border-[#2D313B] font-bold text-[13px] md:text-[11px] text-[#D1D5DB]">
          {savedWorkouts.length}
        </span>
      </Link>
    </>
  );

  return (
    <>
      <div className="border-b border-[#1B1F28] fixed top-0 left-0 w-full z-999 bg-background">
        <Container>
          <div className="navbar px-4 sm:px-6 py-4 sm:py-6.5">
            <div className="navbar-start flex items-center gap-2.5 md:gap-0">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm lg:hidden px-2"
                >
                  <svg
                    aria-label="Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-base-100 z-1 mt-4 rounded-[10px] w-40"
                >
                  {links_center}
                </ul>
              </div>

              <Link href="/">
                <div className="flex items-center gap-2 sm:gap-2.5  cursor-pointer">
                  <Image
                    src={navbar_logo}
                    alt="#navbar_logo"
                    className="w-6 h-6 sm:w-auto sm:h-auto"
                  />
                  <p className="font-primary text-title font-black text-[20px] md:text-[18px] leading-7 tracking-[0.9px]">
                    FITLOG
                  </p>
                </div>
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="font-secondary font-semibold text-[12px] leading-4 capitalize rounded-full flex items-center">
                {links_center}
              </ul>
            </div>

            <div className="navbar-end flex items-center gap-3 sm:gap-6">
              {links_end}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
