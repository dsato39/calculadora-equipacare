import express from "express";
const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  return res.send("Sistema está operacional!");
});

app.listen(8080, () => {
  console.log("Servidor está rodando na porta 8080!");
});
