type color = {
    id: number,
    color: string,
    description: string,
    type: string,
    classes: string[]
}

type palette = {
    id: number,
    colors: color[]
}

export type {color, palette}