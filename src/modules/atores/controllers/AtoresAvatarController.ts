import { Request, Response, NextFunction } from 'express';
import UpdateAtorAvatarService from '../services/UpdateAtorAvatarService';

export default class AtoresAvatarController {
  public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    try {
      const updateAtorAvatar = new UpdateAtorAvatarService();

      const ator = await updateAtorAvatar.execute({
        ator_id: request.params.id, 
        avatarFileName: request.file?.filename as string,
      });

      return response.json(ator);
    } catch (err) {
      next(err);
    }
  }
}