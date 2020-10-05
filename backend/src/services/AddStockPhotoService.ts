import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '../errors/AppError';

import uploadConfig from '../config/upload';
import Stock from '../models/Stock';

interface Request {
  stock_id: string;
  photo1_filename: string;
}

class AddStockPhotoService {
  public async execute({ stock_id, photo1_filename }: Request): Promise<Stock> {
    const stocksRepository = getRepository(Stock);

    const stock = await stocksRepository.findOne(stock_id);

    if (!stock) {
      throw new AppError('Stock not found', 500);
    }

    if (stock.photo1 && photo1_filename) {
      const stockPhoto1FilePath = path.join(uploadConfig.directory, stock.photo1);
      const stockPhoto1FileExists = await fs.promises.stat(stockPhoto1FilePath);

      if (stockPhoto1FileExists) {
        await fs.promises.unlink(stockPhoto1FilePath);
      }
      stock.photo1 = photo1_filename;
    } else if (photo1_filename) {
      stock.photo1 = photo1_filename;
    }

    await stocksRepository.save(stock);

    return stock;
  }
}

export default AddStockPhotoService;
