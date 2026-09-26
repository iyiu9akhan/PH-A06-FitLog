import React from "react";
import Container from "./Container";
import footer_logo from "@/assets/footer/footer_logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="border-t border-[#1A1D24] bg-[#0F1115]">
        <Container>
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <Link href="./">
              <div className="flex gap-2 px-6 py-5 md:py-10">
                <Image src={footer_logo} alt="footer_log" />
                <p className="font-primary font-bold text-[18px] md:text-[14px] leading-5 tracking-[0.7px] text-title uppercase">
                  fitlog
                </p>
              </div>
            </Link>
            <p className="font-secondary font-normal text-[12px] leading-4 text-[#6B7280] mb-5 md:mb-0">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
