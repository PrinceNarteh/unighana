"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import registerImg from "@/assets/images/register.jpg";
import InputField from "../InputField";
import { httpClient } from "@/utils/httpClient";
import { SubmitHandler, useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
// import Spinner from "@/components/Spinner";

type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const submitData: SubmitHandler<RegisterInput> = async (data) => {};

  return (
    <div className="h-screen w-full bg-white flex justify-center items-center px-5">
      <div className="bg-gray-100 max-w-4xl mx-auto w-full min-h-96 grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-md overflow-hidden p-5">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={registerImg}
            alt="Taking notes image"
            className="w-full object-cover"
            fill={true}
          />
        </div>
        <div className="ml-5 col-span-2">
          {/* <ToastContainer /> */}
          <h3 className="text-3xl font-bold text-slate-700">Register</h3>
          <p className="my-2 text-slate-500">
            Provide your details for get registered.
          </p>

          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-col md:flex-row gap-2 ">
              <InputField label="First Name" {...register("firstName")} />
              <InputField label="Last Name" {...register("lastName")} />
            </div>
            <InputField label="Email" type="email" {...register("email")} />
            <InputField
              label="Password"
              type="password"
              {...register("password")}
            />
            <InputField
              label="Confirm Password"
              type="password"
              {...register("confirmPassword")}
            />
            <button className="w-full bg-slate-700 flex justify-center items-center space-x-3 text-white py-2 rounded mt-2">
              {/* {loading && <Spinner />}{" "} */}
              <span className="inline-block">Register</span>
            </button>
          </form>
          <p className="mt-2 text-slate-600 text-center">
            Already have an account?
            <Link href={"/auth/login"} className="text-blue-500">
              {" "}
              Login
            </Link>{" "}
            Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
