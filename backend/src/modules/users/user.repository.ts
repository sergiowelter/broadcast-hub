export class UserRepository {
  async getAll() {
    return [];
  }

  async getById(id: string) {
    return { id, name: 'Usuário de exemplo' };
  }
}
