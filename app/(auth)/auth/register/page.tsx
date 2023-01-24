"use client";

import Spinner from "@/app/Spinner";
import registerImg from "@/assets/images/register.jpg";
import { httpClient } from "@/utils/httpClient";
import { registerUserDto } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "@/assets/images/logo.png";

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
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<RegisterInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerUserDto),
  });
  const router = useRouter();

  const submitData: SubmitHandler<RegisterInput> = async (data) => {
    const res = await httpClient.post("/auth/register", data);
    if (res.status === 201) {
      toast.success("Registration successful");
      router.push("/auth/login");
    } else {
      console.log(res);
    }
  };

  console.log(errors);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#088181] to-[#0d9f9f]  flex justify-center items-center px-5">
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
          <div className="flex justify-center my-4">
            <Image src={logo} alt="logo" />
          </div>
          <h3 className="text-3xl font-bold text-slate-700">Register</h3>
          <p className="my-2 text-slate-500">
            Provide your details for get registered.
          </p>

          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex flex-col md:flex-row gap-2 ">
              <div className="my-1 flex-1">
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  className={`border w-full p-2 outline-none rounded`}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <p className="text-[red] text-xs pl-1 mt-0.5">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="my-1 flex-1">
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  className={`border w-full p-2 outline-none rounded`}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <p className="text-[red] text-xs pl-1 mt-0.5">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="my-1 flex-1">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className={`border w-full p-2 outline-none rounded`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[red] text-xs pl-1 mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="my-1 flex-1">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className={`border w-full p-2 outline-none rounded`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-[red] text-xs pl-1 mt-0.5">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="my-1 flex-1">
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                className={`border w-full p-2 outline-none rounded`}
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-[red] text-xs pl-1 mt-0.5">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              className="w-full bg-slate-700 flex justify-center items-center space-x-3 text-white py-2 rounded mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner />}
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
