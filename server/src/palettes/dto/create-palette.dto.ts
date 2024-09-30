import { IsArray, ArrayMinSize } from 'class-validator';
import { color } from 'src/types';
export class CreatePaletteDto {
    @IsArray()
    @ArrayMinSize(3)
    colors: color[]
}