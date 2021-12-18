import express from "express";

import { specificationRoutes } from "./routes/specification.routes";
import { categoryRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("rodando 3333"));
