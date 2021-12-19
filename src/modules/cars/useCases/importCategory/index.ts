import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const listCategoryUseCase = new ImportCategoryUseCase();

const importCategoryController = new ImportCategoryController(
  listCategoryUseCase
);

export { importCategoryController };
