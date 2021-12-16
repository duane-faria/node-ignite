import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Category already exists!");
    }
    this.specificationRepository.create({
      name,
      description,
    });
  }
}
