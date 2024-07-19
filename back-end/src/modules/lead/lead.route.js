import { Router } from "express";
import { save, findByLeadId } from "./lead.service.js";

const router = Router();

// Rota para salvar um lead
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const id = await save(req.body);
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar um lead pelo cliente_id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await findByLeadId(id);
    if (!lead) {
      return res.status(404).json({ error: "Lead não encontrado" });
    }
    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
