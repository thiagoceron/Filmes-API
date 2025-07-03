import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ator from '../typeorm/entities/Ator';
import AtoresRepository from '../typeorm/repositories/AtoresRepository';
import uploadConfig from '@config/upload';
import path from 'path';
import fs from 'fs';

interface IRequest {
  ator_id: string;
  avatarFileName: string;
}

export default class UpdateAtorAvatarService {
  public async execute({ ator_id, avatarFileName }: IRequest): Promise<Ator> {
    const atoresRepository = getCustomRepository(AtoresRepository);

    const ator = await atoresRepository.findOne(ator_id);

    if (!ator) {
      throw new AppError('Actor not found.', 404);
    }
    if (ator.avatar) {
      const atorAvatarFilePath = path.join(uploadConfig.directory, ator.avatar);
      try {
        await fs.promises.stat(atorAvatarFilePath);
        await fs.promises.unlink(atorAvatarFilePath);
      } catch {
      }
    }

    ator.avatar = avatarFileName;
    await atoresRepository.save(ator);
    return ator;
  }
}