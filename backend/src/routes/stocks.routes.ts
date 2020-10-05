import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import uploadConfig from '../config/upload';

import StocksRepository from '../repositories/StocksRepository';
import CreateStockService from '../services/CreateStockService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AddStockPhotoService from '../services/AddStockPhotoService';

const stocksRouter = Router();
const upload = multer(uploadConfig);

stocksRouter.use(ensureAuthenticated);

stocksRouter.get('/', async (request, response) => {
  const stocksRepository = getCustomRepository(StocksRepository);
  const stocks = await stocksRepository.find();

  return response.json(stocks);
});

//TODO - Working with only one photo for now, must implement two photos
//var cpUpload = upload.fields([{ name: 'photo1', maxCount: 1 }, { name: 'photo2', maxCount: 1 }])
stocksRouter.patch(
  '/photos',
  upload.single("photo"),
  async (request, response) => {
    const addStockPhotoService = new AddStockPhotoService();

    const stock = await addStockPhotoService.execute({
      stock_id: request.body.stock_id,
      photo1_filename: request.file.filename
    });

    return response.json(stock);

  },
);

stocksRouter.post('/', async (request, response) => {
  const {
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
  } = request.body;

  const parsedCollectionDate = parseISO(collection_date);
  const parsedDateOfBirth = parseISO(date_of_birth);
  const parsedLastCheckDate = parseISO(last_check_date);

  const createStock = new CreateStockService();

  const stock = await createStock.execute({
    name,
    from_wild,
    collection_date: parsedCollectionDate,
    collection_location,
    collection_details,
    date_of_birth: parsedDateOfBirth,
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
    last_check_date: parsedLastCheckDate,
    last_check_user_id,
    photo1,
    photo2,
  });

  return response.json(stock);
});

export default stocksRouter;
