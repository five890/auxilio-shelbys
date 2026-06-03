const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando ✔");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});