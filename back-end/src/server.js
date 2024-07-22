import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import leadRouter from "./modules/lead/lead.route.js";
import dimensionsRouter from "./modules/dimensions/dimensions.route.js";
import calculationRouter from "./modules/volume_calculation/volume_calculation.route.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);

// Rotas
app.use("/", leadRouter);
app.use("/dimensions", dimensionsRouter);
app.use("/calculation", calculationRouter);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Ocorreu um erro no servidor!" });
});

// Iniciando o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}!`);
});
