import { Category } from "@modules/cars/model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}
