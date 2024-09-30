import { ColorRanking } from "./enum"

const defaultColor = {
    color:'',
    description:'',
    type:'',
    classes:[]
}

const defaultColors = [
    {
        color: '#eb4034',
        description: 'The dominant color: usually the colors that a brand sets as their identity.',
        type: ColorRanking.primary,
        classes: []
    },
    {
        color: '#3449eb',
        description: 'Accentuate and complement the primary color.',
        type: ColorRanking.secondary,
        classes: []
    },
    {
        color: '#34eb40',
        description: 'Neutral colors are meant to support the interface. They are usually used for backgrounds and text colors.',
        type: ColorRanking.neutral,
        classes: []
    }
]

export {defaultColor, defaultColors}