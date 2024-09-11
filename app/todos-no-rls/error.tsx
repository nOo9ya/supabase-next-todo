"use client";

import React from "react";
import { BounceLoader } from "react-spinners";

const error = () => {
  return (
    <div className="absolute inset-0">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <BounceLoader color="rgb(0,255,196)" />
        <div className="my-2 font-bold">There is something wrong</div>
      </div>
    </div>
  );
};

export default error;
