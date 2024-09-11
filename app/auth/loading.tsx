"use client";
import React from "react";
import { DotLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="absolute inset-0">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <DotLoader color="rgb(0,255,196)" />
        {/* <div className="my-2 font-bold">Loading ...</div> */}
      </div>
    </div>
  );
};

export default loading;
