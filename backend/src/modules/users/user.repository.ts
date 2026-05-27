type User = {
  id: string;
  name: string;
  email: string;
};

export class UserRepository {
  private users: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com' }
  ];
  async getAll() {
    return this.users;
  }

  async getById(id: string) {
    return this.users.find(user => user.id === id);
  }

  async create(userData: Omit<User, "id">) {
    const newUser: User = {
      id: String(this.users.length + 1),
      ...userData,
    };

    this.users.push(newUser);

    return newUser;
  }

  async update(id: string, data: Partial<Omit<User, "id">>) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) return undefined;

    const updated: User = {
      ...this.users[index],
      ...data,
    };

    this.users[index] = updated;

    return updated;
  }

  async delete(id: string) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
