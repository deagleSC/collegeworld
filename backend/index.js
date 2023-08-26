import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

