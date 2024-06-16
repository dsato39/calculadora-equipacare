import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const data = await save(req.body);
  res.status(200).json({ data });
});

export default router;
