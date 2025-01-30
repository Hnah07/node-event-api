import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    isFree: {
      type: Boolean,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);
