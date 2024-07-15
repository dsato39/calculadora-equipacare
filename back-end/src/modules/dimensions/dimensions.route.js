import { Router } from "express";
import { saveDimensions } from "./dimensions.model.js";

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

export default router;
