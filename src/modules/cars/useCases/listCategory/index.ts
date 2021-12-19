import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const listCategoryUseCase = new ListCategoryUseCase(
  CategoryRepository.getInstance()
);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
