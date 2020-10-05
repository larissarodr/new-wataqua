import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  username: string;
  fullname: string;
  email: string;
  password: string;
  initials: string;
}

class CreateUserService {
  public async execute({
    username,
    fullname,
    email,
    password,
    initials,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { username },
    });

    if (checkUserExists) {
      throw new AppError('Username already in use');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      fullname,
      email,
      password: hashedPassword,
      initials,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
