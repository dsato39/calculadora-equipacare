import express from "express";
import leadRouter from "./modules/lead/lead.route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", leadRouter);

app.get("/health", (_, res) => {
  return res.send("Sistema está operacional!");
});

app.listen(8080, () => {
  console.log("Servidor está rodando na porta 8080!");
});
