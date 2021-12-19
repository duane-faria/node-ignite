import { Router } from "express";

import { specificationRoutes } from "./specification.routes";
import { categoryRoutes } from "./categories.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);

export { router };
