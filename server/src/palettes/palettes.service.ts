import { Injectable, NotAcceptableException } from '@nestjs/common';
import { palette } from 'src/types';
import { checkForDuplicates, checkForEmptyClasses } from 'src/util/helperFunctions';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PalettesService {
    constructor(private readonly databaseService: DatabaseService){}

    async getPalettes(){
        return this.databaseService.palette.findMany({
            include: {
                colors: true,
            },
        })
    }

    async createPalettes(palette: Prisma.PaletteCreateInput){
        // if(checkForEmptyClasses(palette)){ throw new NotAcceptableException('Cannot Upload Palette', 
        //     { cause: new Error(), description:'All colors in your palette must have colored at least one element.'})}
        
        // if(checkForDuplicates(palette, this.palettes)){ throw new NotAcceptableException('Cannot Upload Palette', {
        //     cause: new Error(), description:'There is an already existing palette with the same colors.'})}

        // const palettesByHighestId = this.palettes.sort((a, b) => b.id - a.id)
        // const newPalette = {
        //     id: palettesByHighestId[0].id + 1,
        //     ...palette
        // }
        // this.palettes.push(newPalette)
        console.log(palette)
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
