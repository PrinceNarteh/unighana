"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Spinner from "@/app/Spinner";
import login from "@/assets/images/login.jpg";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginInput {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    defaultValues: { email: "", password: "" },
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const submitData = async (data: LoginInput) => {
    setLoading(true);
    const res = await signIn("credentials", { ...data, redirect: false });
    if (!res?.ok) {
      toast.error("Invalid credentials");
      setLoading(false);
    } else {
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <div className="h-screen w-full bg-white px-5 flex justify-center items-center">
      <div className="bg-gray-100 max-w-4xl mx-auto w-full min-h-96 grid grid-cols-1 md:grid-cols-3  shadow-lg rounded-md overflow-hidden p-5">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={login}
            alt="Taking notes image"
            className="w-full object-cover"
            fill={true}
          />
        </div>
        <div className="ml-5 col-span-2">
          <h3 className="text-3xl font-bold text-slate-700">Login</h3>
          <p className="my-2 text-slate-500">Enter your credentials to login</p>
          {error && <p className="text-red-500 text-center py-2">{error}</p>}
          <form onSubmit={handleSubmit(submitData)}>
            <InputField label="Email" type="email" {...register("email")} />
            <InputField
              label="Password"
              type="password"
              {...register("password")}
            />
            <button className="w-full bg-slate-700 flex justify-center items-center space-x-3 text-white py-2 rounded mt-2">
              {loading && <Spinner />}{" "}
              <span className="inline-block">Login</span>
            </button>
          </form>
          <p className="mt-2 text-slate-600 text-center">
            Don't have an account?
            <Link href={"/auth/register"} className="text-blue-500">
              {" "}
              Register
            </Link>{" "}
            Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
