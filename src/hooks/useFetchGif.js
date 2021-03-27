import { useEffect, useState } from 'react'
export const useFetchGif = (categoria) => {

    useEffect(() => {
        getGifs();

    }, [categoria]) 

    const [gif, setGif] = useState({
        data: [],
        loading: true
    })

    const getGifs = async () => {
        const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=ec0hfEqDRQJwl8Uk1TocAiIbu0S20Cna`
        const { data } = await fetch(URL).then(response => response.json())
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        setGif({
            data: gifs,
            loading: false
        })
    }

   

    return gif;
}