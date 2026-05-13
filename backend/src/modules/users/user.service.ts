import { UserRepository } from './user.repository';

const userRepository = new UserRepository();

export class UserService {
  async findAll() {
    return userRepository.getAll();
  }

  async findById(id: string) {
    return userRepository.getById(id);
  }
}
