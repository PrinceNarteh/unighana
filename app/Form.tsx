"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createNote, editNote } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import { INote, Inputs } from "@/types/note";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { closeModal } from "@/features/modal/modalSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Form = ({ note }: { note?: INote }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      _id: note?._id || "",
      title: note?.title || "",
      content: note?.content || "",
    },
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    if (note?._id) {
      dispatch(closeModal());
      router.push(`/${note._id}`);
    } else {
      dispatch(closeModal());
    }
  };

  const submitData: SubmitHandler<Inputs> = async (data) => {
    if (note?._id) {
      await dispatch(editNote(data));
      toast.success("Note updated successfully");
      dispatch(closeModal());
      router.push(`/${note._id}`);
    } else {
      await dispatch(createNote(data));
      toast.success("Note created successfully");
      dispatch(closeModal());
    }
  };

  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-gray-800/80 backdrop-blur-sm  flex justify-center items-center p-10">
      <div className="relative max-w-xl w-full bg-white p-10 rounded-lg space-y-3">
        <IoMdCloseCircleOutline
          onClick={() => handleCloseModal()}
          className="absolute text-3xl text-gray-700 right-3 top-3 cursor-pointer hover:scale-125 duration-200"
        />
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
              }
              focus:border-teal-500
              `}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-[red] text-xs pl-1 mt-0.5">
                {"Title cannot be empty"}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="content" className="block mb-1 text-gray-500">
              Content
            </label>
            <textarea
              className={`w-full outline-none border border-gray-500 p-2 rounded
              ${errors.content ? "border-red-500" : "border-gray-500"}
              focus:border-teal-500
              `}
              rows={7}
              {...register("content", { required: true })}
            />
            {errors.content && (
              <p className="text-[red] text-xs pl-1 mt-0.5">
                {"Content cannot be empty"}
              </p>
            )}
          </div>
          <div>
            <button className="bg bg-teal-500 text-white py-2 px-5 rounded-full float-right hover:scale-110 duration-200">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
