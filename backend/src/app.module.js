const { Module, MiddlewareConsumer, RequestMethod } = require('@nestjs/common');
const { GraphQLModule } = require('@nestjs/graphql');
const { join } = require('path');
const { UserModule } = require('./user/user.module');
const { OtpMiddleware } = require('./middleware/otp.middleware');

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    UserModule,
  ],
})
class AppModule {
  configure(consumer) {
    consumer
      .apply(OtpMiddleware)
      .forRoutes({ path: '/graphql', method: RequestMethod.POST });
  }
}

module.exports = { AppModule };
