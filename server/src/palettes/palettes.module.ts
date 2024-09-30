import { Module } from '@nestjs/common';
import { PalettesController } from './palettes.controller';
import { PalettesService } from './palettes.service';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [PalettesController],
  providers: [PalettesService]
})
export class PalettesModule {}
