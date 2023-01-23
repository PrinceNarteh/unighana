"use client";

import Form from "@/app/Form";
import React from "react";

interface IEditNote {
  params: {
    noteId: string;
  };
}

const EditNote = ({ params }: IEditNote) => {
  return (
    <div className="max-w-5xl mx-auto">
      {params.noteId}
      {/* <Form /> */}
    </div>
  );
};

export default EditNote;
