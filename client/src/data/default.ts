import { ColorRanking } from "./enum"

const defaultColor = {
    color:'',
    description:'',
    type:''
}

const defaultColors = [
    {
        color: '#eb4034',
        description: 'The dominant color: usually the colors that a brand sets as their identity.',
        type: ColorRanking.primary
    },
    {
        color: '#3449eb',
        description: 'Accentuate and complement the primary color.',
        type: ColorRanking.secondary
    },
    {
        color: '#34eb40',
        description: 'Neutral colors are meant to support the interface. They are usually used for backgrounds and text colors.',
        type: ColorRanking.neutral
    }
]

export {defaultColor, defaultColors}