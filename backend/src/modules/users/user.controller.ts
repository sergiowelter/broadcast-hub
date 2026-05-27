import { Request, Response } from 'express';
import { UserService } from './user.service';
import { createUserSchema } from "./dtos/create-user.dto";

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
    const validation = createUserSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const user = await userService.create(validation.data);

    return res.status(201).json(user);
  }
}
