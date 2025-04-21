const { UserService } = require('./user.service');

class UserResolver {
  constructor() {
    this.userService = new UserService();
  }

  async hello() {
    return 'Hello from GraphQL';
  }

  async registerUser(email, password, name, phone, isSeller) {
    const user = await this.userService.registerUser({ email, password, name, phone, isSeller });
    return `User ${user.email} registered successfully`;
  }
}

module.exports = { UserResolver };
