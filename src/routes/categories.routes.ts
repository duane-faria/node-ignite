import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoryRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoryRoutes.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoryRoutes.get("/", (req, res) => listCategoryController.handle(req, res));

categoryRoutes.post("/import", upload.single("file"), (req, res) =>
  importCategoryController.handle(req, res)
);

export { categoryRoutes };
