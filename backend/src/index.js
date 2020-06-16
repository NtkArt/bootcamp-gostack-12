const express = require("express");

const app = express();
let PORT = 3333;

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});
app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 20", "Projeto 2", "Projeto 3"]);
});
app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta:", PORT);
});
