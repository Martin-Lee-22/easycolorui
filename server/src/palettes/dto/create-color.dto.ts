import { IsArray, IsInt, IsNotEmpty, IsString, isNotEmpty } from "class-validator"

export class CreateColorDto {
    @IsInt()
    id: number

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
