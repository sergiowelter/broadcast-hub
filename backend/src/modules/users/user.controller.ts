import { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();

export class UserController {
  async getAll(req: Request, res: Response): Promise<Response> {
    const users = await userService.findAll();
    return res.json(users);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const user = await userService.findById(req.params.id);
    return res.json(user);
  }
}
