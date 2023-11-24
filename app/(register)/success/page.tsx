"use client";

import React from "react";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation";

type Props = {};

const SuccessPage = (props: Props) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#36384D]">
      <div className=" h-full w-full bg-white p-8 shadow-2xl md:block md:h-fit md:w-fit md:rounded-3xl md:p-12">
        <div className="flex h-full flex-col justify-center text-black md:block md:h-fit md:w-[400px]">
          <div className="flex flex-1 flex-col justify-center">
            <div className="">
              <Check className="mb-8 h-24 w-24 rounded-full bg-gradient-to-tr from-[#FF5476] from-30% via-[#FF5E59] to-[#FF5D4D] to-70% p-4 font-semibold text-white md:mb-4 md:h-10 md:w-10 md:p-2" />
            </div>
            <h1 className="text-5xl font-bold text-black">
              Thanks for subcribing!
            </h1>
            <p className="my-8">
              A confirmation email has been sent to <strong>{email}</strong>.
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <div className="">
            <button className="w-full rounded-md bg-black from-[#FF5476] via-[#FF5E59] to-[#FF5D4D] p-3 text-sm font-semibold text-white hover:bg-gradient-to-r md:mt-2">
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
