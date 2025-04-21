const { Module } = require('@nestjs/common');
const { UserService } = require('./user.service');
const { UserResolver } = require('./user.resolver');

@Module({
  providers: [UserService, UserResolver],
  exports: [UserService],
})
class UserModule {}

module.exports = { UserModule };
