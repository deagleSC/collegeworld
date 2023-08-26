import express from "express";
import { saveData } from "../controllers/user.js";

const router = express.Router();

router.post("/savedata", saveData);

export default router;
