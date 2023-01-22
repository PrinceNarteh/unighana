import React from "react";

type IInputField = {
  label: string;
  type?: string;
  additionalStyles?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  additionalStyles,
  type = "text",
  ...props
}: IInputField) => {
  return (
    <div className="my-1 flex-1">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        className={`border w-full p-2 outline-none rounded ${additionalStyles}`}
        {...props}
      />
    </div>
  );
};

export default InputField;
