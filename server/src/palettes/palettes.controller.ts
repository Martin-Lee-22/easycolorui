import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@SkipThrottle() // Skips the throttle for everything below this line
@Controller('palettes')
export class PalettesController {

    constructor(private readonly palettesService: PalettesService){}

    @SkipThrottle({default:false}) // The throttle will be applied to this route.
    @Get()
    async getPalettes(){
        return this.palettesService.getPalettes()
    }

    @Throttle({short:{ttl: 10000, limit: 1}}) // Overrides the 'short' throttle and all its values.
    @Post()
    async createPalette(@Body(ValidationPipe) palette:Prisma.PaletteCreateInput){
        return this.palettesService.createPalettes(palette)
    }

    @Delete(':id')
    async deletePalette(@Param('id') id: number){
        return this.palettesService.deletePalette(+id)
    }
}
