import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
} from "../../backend/controllers/blogController.js";

const router = Router();

router.post("/create-blog", createBlog);
router.get("/blogs", getBlogs);
router.get("/blog/:id", getBlogById);

export default router;
