import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategoria = ({ setCategoria }) => {
    const [inputVlue, setInputVlue] = useState('')
    const cambioDeValor = (e) => {
        setInputVlue(e.target.value)
    }
    const enviarValor = (e) => {
        e.preventDefault()
        if (inputVlue.trim().length > 2) {
            setCategoria(cat => [inputVlue, ...cat])
            setInputVlue('')
        }

    }
    return (
        <form onSubmit={enviarValor}>
            <input type="text" value={inputVlue} onChange={cambioDeValor} />
        </form>
    )
}

AddCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
