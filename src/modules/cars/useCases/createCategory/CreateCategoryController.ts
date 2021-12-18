import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request, response) {
    const { name, description }: { name: string; description: string } =
      request.body;

     this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
