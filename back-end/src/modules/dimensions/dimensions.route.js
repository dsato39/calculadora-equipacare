import { Router } from "express";
import { findByDimensionId, saveDimensions } from "./dimensions.service.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const id = await saveDimensions(req.body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await findByDimensionId(id);
    if (!lead) {
      return res.status(404).json({ error: "Lead não encontrado" });
    }
    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
