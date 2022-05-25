import path from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { DatabaseModule } from '../database/database.module';
import { ProductsResolver } from './graphql/resolver/products.resolver';
import { ProductsService } from '../services/products.service';
import { PurchaseService } from '../services/purchases.service';
import { PurchaseResolver } from './graphql/resolver/purchases.resolver';
import { CustomerService } from '../services/customers.service';
import { CustomerResolver } from './graphql/resolver/customers.resolver';
import { MessagingModule } from '../messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    PurchaseResolver,
    CustomerResolver,
    ProductsService,
    PurchaseService,
    CustomerService,
  ],
})
export class HttpModule {}
