import { Request, Response } from 'express';
import { UserService } from './user.service';

const userService = new UserService();

export class UserController {
  async getAll(_req: Request, res: Response): Promise<Response> {
    const users = await userService.findAll();
    return res.json(users);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await userService.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = await userService.create({
      name,
      email,
    });

    return res.status(201).json(user);
  }
}
