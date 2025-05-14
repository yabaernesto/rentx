import fs from 'node:fs';
import { parse } from 'csv-parse';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File | undefined): void {
    if (!file) {
      throw new Error();
    }

    const stream = fs.createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
