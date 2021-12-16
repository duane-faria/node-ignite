import { Router } from "express";

import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";

const categoryRoutes = Router();
const categoryRepo = new CategoryRepository();

categoryRoutes.post("/", (req, res) => {
  const { name, description }: { name: string; description: string } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepo);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoryRoutes.get("/", (req, res) => {
  return res.json(categoryRepo.list());
});

export { categoryRoutes };
