"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Vui lòng nhập email",
    })
    .max(50, {
      message: "Độ dài email tối đa là 50 ký tự",
    })
    .refine((value) => isEmail(value), {
      message: "Địa chỉ email không hợp lệ",
    }),
});

const isEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const RegisterForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center gap-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold">Email address</label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <input
          {...register("email")}
          type="email"
          className={`
          rounded-lg border border-slate-100 p-3 text-sm hover:cursor-pointer ${
            errors.email && "text-rose-500"
          }
          `}
          placeholder="Nhập email của bạn"
          autoFocus
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-md bg-black from-[#FF5476] via-[#FF5E59] to-[#FF5D4D] p-3 text-sm font-semibold text-white hover:bg-gradient-to-r disabled:bg-black/20 disabled:hover:cursor-not-allowed"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
