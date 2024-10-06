import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    bulletPoints: {
      type: String,
    },
    refrenceLinks: {
      type: String,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);

export default Blog;
