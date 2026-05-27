import { UserRepository } from './user.repository';

const userRepository = new UserRepository();

export class UserService {
  async findAll() {
    return userRepository.getAll();
  }

  async findById(id: string) {
    return userRepository.getById(id);
  }

  async create(data: { name: string; email: string }) {
    return userRepository.create(data);
  }

  async update(id: string, data: { name?: string; email?: string }) {
    return userRepository.update(id, data);
  }

  async delete(id: string) {
    return userRepository.delete(id);
  }
}
