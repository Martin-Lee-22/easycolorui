import { useEffect, useState } from "react"
import axios from "../api/axios"
import { palette } from "../types/palette"

const usePalettes = () => {
    const [palettes, setPalettes] = useState<palette[]>([])

    useEffect(()=>{
        getPalettes()
    },[])
    const getPalettes = async () => {
        try{
            console.log('Fetching palettes...')
            console.time()
            const response = await axios.get('/palettes')
            setPalettes(response.data)
            console.log('Palettes fetched')
            console.timeEnd()
        }catch(err){
            console.log('Cannot get palettes')
            console.log(`Error: ${err}`)
        }
    }

    const createPalette = async (newPalette: palette) => {
        try{
            await axios.post('/palettes', newPalette)
            setPalettes([...palettes, newPalette])
        }catch(err){
            console.log('Cannot create palette')
            console.log(`Error: ${err}`)
        }
    }
    return {palettes, createPalette}
}

export default usePalettes