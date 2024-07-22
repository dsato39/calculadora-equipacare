import express from "express";
import { handleVolumeCalculation } from "./volume_calculation.controller.js";

const router = express.Router();

router.get("/:id_cliente", handleVolumeCalculation);

export default router;
