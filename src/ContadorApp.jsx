import { useState } from "react"

export const ContadorApp = ({ value }) => {

    const [contador, setContador] = useState(value)

    const masUno = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador: </h1>
            <button onClick={masUno}>
                Soy un boton:  {contador}
            </button> 
        </>
  )
}
