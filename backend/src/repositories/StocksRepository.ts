import { EntityRepository, Repository } from 'typeorm';

import Stock from '../models/Stock';

@EntityRepository(Stock)
class StocksRepository extends Repository<Stock> {
  public async findByName(name: string): Promise<Stock | null> {
    const findStock = await this.findOne({
      where: { name },
    });

    return findStock || null;
  }
}

export default StocksRepository;
