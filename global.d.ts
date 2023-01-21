import mongoose from "mongoose";

declare global {
  var mongoose = ReturnType<typeof mongoose>;
}
