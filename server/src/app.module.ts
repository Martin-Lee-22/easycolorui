import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalettesModule } from './palettes/palettes.module';
import { DatabaseModule } from './database/database.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PalettesModule, 
    DatabaseModule, 
    ThrottlerModule.forRoot([{
    name: 'short',
    ttl: 1000,
    limit: 3
  },
  {
    name:'long',
    ttl: 60000,
    limit: 100
  }])
],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule {}