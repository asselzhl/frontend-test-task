import express from "express";
import cors from "cors";
import { v4 as v4 } from "uuid";

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let entities = [
  {
    id: v4(),
    name: "Entity1",
    coordinate: [-5, 10],
    labels: ["labelA", "labelB", "labelE"],
  },
  {
    id: v4(),
    name: "Entity2",
    coordinate: [3, 6],
    labels: ["labelC", "labelD"],
  },
  {
    id: v4(),
    name: "Entity3",
    coordinate: [4, -1],
    labels: ["labelA", "labelC"],
  },
];

app.get("/entities", (req, res) => {
  res.json(entities);
});

app.post("/entities", (req, res) => {
  const newEntity = { id: v4(), ...req.body };
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

app.put("/entities/:id", (req, res) => {
  const entityId = req.params.id;
  const index = entities.findIndex((e) => e.id === entityId);
  if (index !== -1) {
    entities[index] = { ...entities[index], ...req.body };
    res.json(entities[index]);
  } else {
    res.status(404).send("Entity not found");
  }
});

app.delete("/entities/:id", (req, res) => {
  const entityId = req.params.id;
  const entityIndex = entities.findIndex((e) => e.id === entityId);

  if (entityIndex !== -1) {
    const deletedEntity = entities.splice(entityIndex, 1)[0];
    res.status(200).json(deletedEntity);
  } else {
    res.status(404).json({ message: "Entity not found" });
  }
});

app.get("/entities/query", (req, res) => {
  const { x1, y1, x2, y2 } = req.query;

  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);

  const result = entities.filter((entity) => {
    const [x, y] = entity.coordinate;
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  });

  const labels = [...new Set(result.flatMap((entity) => entity.labels))];
  const entityNames = result.flatMap((entity) => entity.name);

  res.json({ entities: entityNames, labels });
});
