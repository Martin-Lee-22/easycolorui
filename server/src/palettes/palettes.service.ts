import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PalettesService {
    constructor(private readonly databaseService: DatabaseService){}

    async getPalettes(){
        console.log('Retrieving palette from database...')
        return this.databaseService.palette.findMany({
            include: {
                colors: true,
            },
        })
    }

    async createPalettes(palette: Prisma.PaletteCreateInput){
        const newPalette = {
            colors:{
                create: palette.colors as Prisma.ColorsCreateWithoutPaletteInput[]
            }
        }
        return this.databaseService.palette.create({
            data: newPalette
        })
    }

    async deletePalette(id: number){
        return this.databaseService.palette.delete({
            where: {
                id: id
            }
        })
    }
}
