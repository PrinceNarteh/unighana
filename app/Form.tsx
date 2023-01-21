import React from "react";

const Form = () => {
  return (
    <div className="fixed bg-gray-800/80 backdrop-blur-sm inset-0 flex justify-center items-center p-5">
      <div className="max-w-xl w-full bg-white p-10 rounded-lg space-y-3">
        <h3 className="text-center text-2xl mb-5 font-semibold text-gray-500">
          Add Note
        </h3>
        <div>
          <label htmlFor="title" className="block mb-1 text-gray-500">
            Title
          </label>
          <input
            type="text"
            className="w-full outline-none border border-gray-500 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1 text-gray-500">
            Content
          </label>
          <textarea
            className="w-full outline-none border border-gray-500 p-2 rounded"
            rows={7}
          />
        </div>
        <div className="flex items-center space-x-3">
          <span>Color:</span>
          <span className="cursor-pointer block w-7 h-7 bg-red-500 rounded-full"></span>
          <span className="cursor-pointer block w-7 h-7 bg-yellow-500 rounded-full"></span>
          <span className="cursor-pointer block w-7 h-7 bg-green-500 rounded-full"></span>
          <span className="cursor-pointer block w-7 h-7 bg-blue-500 rounded-full"></span>
          <input
            type="color"
            name=""
            id=""
            className="w-8 h-8 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
