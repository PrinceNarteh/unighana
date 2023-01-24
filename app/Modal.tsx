import Form from "./Form";

const Modal = () => {
  return (
    <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-gray-800/80 backdrop-blur-sm  flex justify-center items-center p-10">
      <Form />
    </div>
  );
};

export default Modal;
