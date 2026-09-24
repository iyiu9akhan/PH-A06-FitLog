import Container from "@/components/Container";
import React from "react";

function pages() {
  return (
    <>
      <Container>
        <div className="mt-12 mx-6">
          <h1 className="uppercase font-primary font-bold text-[30px] leading-9 tracking-[-0.75px] mb-2">
            my plan
          </h1>
          <p className="font-secondary font-normal text-[14px] leading-5 text-subTitle mb-6">Cap of five lifts for today. Finish them, then load more.</p>
        </div>
      </Container>
    </>
  );
}

export default pages;
