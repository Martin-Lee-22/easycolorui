import { IsArray, IsInt, IsNotEmpty, IsString, isNotEmpty } from "class-validator"

export class CreateColorDto {
    @IsString()
    color: string

    @IsString()
    description: string

    @IsString()
    type: string

    @IsArray()
    @IsNotEmpty()
    classes: string[]
}
