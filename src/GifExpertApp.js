import React, { useState } from 'react'
import { AddCategoria } from './components/addCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categoria, setCategoria] = useState(['Hora de aventura'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategoria={setCategoria} />
            <hr />

            <ol>
                {
                    categoria.map(c => (
                        <GifGrid key={c} categoria={c} />
                    ))
                }
            </ol>
        </>
    )
}
