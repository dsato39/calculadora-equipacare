import { Router } from "express";
import { save } from "./lead.model.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await save(req.body);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
