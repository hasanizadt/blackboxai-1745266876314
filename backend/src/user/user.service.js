const { Injectable } = require('@nestjs/common');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

@Injectable()
class UserService {
  async registerUser(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        phone: data.phone,
        isSeller: data.isSeller || false,
      },
    });
    return user;
  }

  async validateUser(email, password) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null;
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;
    return user;
  }

  async generateJwt(user) {
    const payload = { sub: user.id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1h' });
  }
}

module.exports = { UserService };
