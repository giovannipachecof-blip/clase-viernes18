import { useState } from 'react'

function String() {
  const [texto, setTexto] = useState("hola")

  return (
    <>
        <button
          type="button"
          onClick={() => setTexto((count) => count + 1)}
        >
          mi texto es {texto}
        </button>
    </>
  )
}
export default String