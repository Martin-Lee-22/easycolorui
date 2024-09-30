import { CreatePaletteDto } from "src/palettes/dto/create-palette.dto"
import { color } from "src/types"
import { Prisma } from "@prisma/client"
/**
 * Takes a palette and checks if it has any colors with empty classes.
 * @param newPalette The palette to be checked.
 * @returns {boolean} True if there are colors with empty classes, false otherwise.
 */
function checkForEmptyClasses(newPalette: CreatePaletteDto):boolean{
    const filteredPalettesViaClasses = newPalette.colors.filter(color => color.classes.length === 0)
    if(filteredPalettesViaClasses.length > 0) return true
    return false
}

/**
 * Compares two arrays of colors and checks if they are equal.
 * @param colors The old array of colors.
 * @param newColors The new array of colors.
 * @returns {boolean} True if the two arrays of colors are equal, false otherwise.
 */
function checkForEqualColors(colors: color[], newColors: color[]):boolean{
    if(colors.length !== newColors.length) return false
    const result = []
    for(let i = 0; i < colors.length; i++){
        if(colors[i].type === newColors[i].type && colors[i].color === newColors[i].color){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    const allEqual = result.every(result => result === true)
    if(allEqual) return true
    return false
}

/**
 * Checks if a palette is already in the list of palettes.
 * @param newPalette The palette to be checked.
 * @param palettes The list of palettes.
 * @returns {boolean} True if a duplicate is found, false otherwise.
 */
function checkForDuplicates(newPalette: CreatePaletteDto, palettes: CreatePaletteDto[]):boolean{
    const foundDuplicate = palettes.find(palette => checkForEqualColors(palette.colors, newPalette.colors))
    if (foundDuplicate !== undefined) return true
    return false
}

export {checkForDuplicates, checkForEmptyClasses}