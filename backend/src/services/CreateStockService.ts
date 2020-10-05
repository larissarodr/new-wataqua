import { getCustomRepository } from 'typeorm';

import Stock from '../models/Stock';
import StocksRepository from '../repositories/StocksRepository';

interface Request {
  name: string;
  from_wild: boolean;
  collection_date: Date;
  collection_location: string;
  collection_details: string;
  date_of_birth: Date;
  has_parents: boolean;
  mom_id: string;
  dad_id: string;
  responsible_user_id: string;
  relevance: string;
  comment: string;
  genotype: string;
  phenotype: string;
  number_of_males: number;
  number_of_females: number;
  number_of_hermaphrodites: number;
  number_of_juveniles: number;
  has_dna_sample: boolean;
  dna_sample_details: string;
  has_other_sample: boolean;
  other_sample_details: string;
  amount_founder_fish: number;
  last_check_date: Date;
  last_check_user_id: string;
  photo1: string;
  photo2: string;
}

class CreateStockService {
  public async execute({
    name,
    from_wild,
    collection_date,
    collection_location,
    collection_details,
    date_of_birth,
    has_parents,
    mom_id,
    dad_id,
    responsible_user_id,
    relevance,
    comment,
    genotype,
    phenotype,
    number_of_males,
    number_of_females,
    number_of_hermaphrodites,
    number_of_juveniles,
    has_dna_sample,
    dna_sample_details,
    has_other_sample,
    other_sample_details,
    amount_founder_fish,
    last_check_date,
    last_check_user_id,
    photo1,
    photo2,
  }: Request): Promise<Stock> {
    const stocksRepository = getCustomRepository(StocksRepository);

    const stock = stocksRepository.create({
      name,
      from_wild,
      collection_date,
      collection_location,
      collection_details,
      date_of_birth,
      has_parents,
      mom_id,
      dad_id,
      responsible_user_id,
      relevance,
      comment,
      genotype,
      phenotype,
      number_of_males,
      number_of_females,
      number_of_hermaphrodites,
      number_of_juveniles,
      has_dna_sample,
      dna_sample_details,
      has_other_sample,
      other_sample_details,
      amount_founder_fish,
      last_check_date,
      last_check_user_id,
      photo1,
      photo2,
    });

    await stocksRepository.save(stock);

    return stock;
  }
}

export default CreateStockService;
