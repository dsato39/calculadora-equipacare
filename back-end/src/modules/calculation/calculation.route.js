import express from "express";
import { handleCalculation } from "./calculation.controller.js";

const router = express.Router();

router.get("/:id_cliente", handleCalculation);

export default router;
