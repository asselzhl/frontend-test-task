import express from "express";
const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let entities = [
  {
    id: 1,
    name: "Entity1",
    coordinate: [-5, 10],
    labels: ["labelA", "labelB", "labelE"],
  },
  { id: 2, name: "Entity2", coordinate: [3, 6], labels: ["labelC", "labelD"] },
  { id: 3, name: "Entity3", coordinate: [4, -1], labels: ["labelA", "labelC"] },
];

app.get("/entities", (req, res) => {
  res.json(entities);
});

app.post("/entities", (req, res) => {
  const newEntity = { id: Date.now(), ...req.body };
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

app.put("/entities/:id", (req, res) => {
  const entityId = parseInt(req.params.id, 10);
  const index = entities.findIndex((e) => e.id === entityId);
  if (index !== -1) {
    entities[index] = { ...entities[index], ...req.body };
    res.json(entities[index]);
  } else {
    res.status(404).send("Entity not found");
  }
});

app.delete("/entities/:id", (req, res) => {
  const entityId = parseInt(req.params.id, 10);
  entities = entities.filter((e) => e.id !== entityId);
  res.status(204).send();
});