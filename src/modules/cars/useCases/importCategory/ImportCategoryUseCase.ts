import fs from "fs";
import { parse } from "csv-parse";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<Array<IImportCategory>> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: Array<IImportCategory> = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach(async (category) => {
      if (!this.categoryRepository.findByName(category.name)) {
        this.categoryRepository.create(category);
      }
    });

    console.log(categories);
  }
}
