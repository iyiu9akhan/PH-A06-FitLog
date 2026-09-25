import React from "react";
import Container from "./Container";
import footer_logo from "@/assets/footer/footer_logo.png";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="border-t border-[#1A1D24] bg-[#090A0D]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 px-6 py-10">
              <Image src={footer_logo} alt="footer_log" />
              <p className="font-primary font-bold text-[14px] leading-5 tracking-[0.7px] text-title uppercase">
                fitlog
              </p>
            </div>
            <p className="font-secondary font-normal text-[12px] leading-4 text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
