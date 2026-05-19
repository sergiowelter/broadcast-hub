export class UserRepository {
  private users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' }
  ];
  async getAll() {
    return this.users;
  }

  async getById(id: string) {
    return this.users.find(user => user.id === id);
  }
}
