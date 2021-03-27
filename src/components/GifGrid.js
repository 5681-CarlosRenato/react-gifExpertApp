import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifItem } from './GifItem'

export const GifGrid = ({ categoria }) => {
    //ec0hfEqDRQJwl8Uk1TocAiIbu0S20Cna
    /*
        const [imagenes, setImagenes] = useState([])
    
        useEffect(() => {
            getGifs()
        }, [categoria])
    
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
            setImagenes(gifs)
        }
        */

    const { data: images, loading } = useFetchGif(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {loading ? <p>Cargando...</p> : null}
            <div className="card-grid">
                {

                    images.map(img => {
                        return (
                            <GifItem key={img.id} {...img} />
                        )
                    }

                    )

                }

            </div>
        </>
    )
}
