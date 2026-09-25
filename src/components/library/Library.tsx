import React from "react";
import Container from "../Container";
import LibraryCard from "./LibraryCard";

function Library() {
  return (
    <>
      <div id="library">
        <Container>
          <div className="mx-6">
            <h1 className="uppercase font-primary font-bold text-[30px] leading-9 tracking-[-0.75px] mb-1">
              the library
            </h1>
            <p className="font-secondary font-normal text-[14px] leading-5 text-subTitle mb-8">
              Twelve lifts covering every major muscle group.
            </p>
            <LibraryCard />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Library;
