import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  content: string;
  color: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      content: "",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    },
  });

  const submitData: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-gray-800/80 backdrop-blur-sm  flex justify-center items-center p-10">
      <div className="max-w-xl w-full bg-white p-10 rounded-lg space-y-3">
        <h3 className="text-center text-2xl mb-5 font-semibold text-gray-500">
          Add Note
        </h3>
        <form onSubmit={handleSubmit(submitData)} className="space-y-3">
          <div>
            <label htmlFor="title" className="block mb-1 text-gray-500">
              Title
            </label>
            <input
              type="text"
              className={`w-full outline-none border  p-2 rounded ${
                errors.title ? "border-red-500" : "border-gray-500"
              }`}
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="content" className="block mb-1 text-gray-500">
              Content
            </label>
            <textarea
              className={`w-full outline-none border border-gray-500 p-2 rounded
              ${errors.content ? "border-red-500" : "border-gray-500"}
              `}
              rows={7}
              {...register("content", { required: true })}
            />
            <p></p>
          </div>
          <div className="flex items-center space-x-3">
            <span>Color:</span>
            <input
              type="color"
              id=""
              className="w-8 h-8 cursor-pointer rounded-full"
              {...register("color")}
            />
          </div>
          <div>
            <button className="bg bg-teal-500 text-white py-2 px-5 rounded-full float-right">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
