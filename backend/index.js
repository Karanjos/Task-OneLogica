import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/route.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

// Routes

app.use("/api", blogRoutes);

// Connect to MongoDB

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
