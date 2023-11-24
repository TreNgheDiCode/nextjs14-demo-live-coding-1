import RegisterForm from "@/components/register-form";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

enum STEP {}

const RegisterPage = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#36384D]">
      <div className="flex h-full w-full flex-col gap-x-4 bg-white shadow-2xl md:m-4 md:grid md:h-fit md:w-fit md:grid-cols-[auto_300px] md:rounded-3xl md:p-6">
        <div className="order-last flex flex-col justify-center p-6 text-black md:order-1">
          <h1 className="my-4 text-4xl font-bold text-black">Stay updated!</h1>
          <p className="mb-4 max-w-[300px] text-sm">
            Join 60.000+ product managers receiving monthly updates on:
          </p>
          <ul className="mb-4 text-xs">
            <li className="mb-2 flex items-center">
              <div>
                <Check className="mr-3 h-5 w-5 rounded-full bg-[#FF5D4D] p-1 font-semibold text-white" />
              </div>
              Product discovery and building what matters
            </li>
            <li className="mb-2 flex items-center">
              <div>
                <Check className="mr-3 h-5 w-5 rounded-full bg-[#FF5D4D] p-1 font-semibold text-white" />
              </div>
              Measuring to ensure updates are a success
            </li>
            <li className="mb-2 flex items-center">
              <Check className="mr-3 h-5 w-5 rounded-full bg-[#FF5D4D] p-1 font-semibold text-white" />
              And much more!
            </li>
          </ul>
          <RegisterForm />
        </div>
        <div className="relative order-2 h-full w-full ">
          <Image
            fill
            alt="img_form"
            src="illustration-sign-up-mobile.svg"
            className="rounded-b-2xl object-cover md:rounded-none"
          />
        </div>
        {/* illustration-sign-up-mobile */}
      </div>
    </div>
  );
};

export default RegisterPage;
