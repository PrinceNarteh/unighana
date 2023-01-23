import React, { Dispatch, SetStateAction } from "react";
import Form from "./Form";

interface ISearchBar {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal }: ISearchBar) => {
  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-gray-800/80 backdrop-blur-sm  flex justify-center items-center p-10">
      <Form setOpenModal={setOpenModal} />
    </div>
  );
};

export default Modal;
