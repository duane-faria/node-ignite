import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";

const categoryRoutes = Router();
const categoryRepo = new CategoryRepository();

categoryRoutes.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoryRoutes.get("/", (req, res) => {
  return res.json(categoryRepo.list());
});

export { categoryRoutes };
