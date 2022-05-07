import { useState } from 'react'

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([])

  const tValor = (valor) => { console.log(valor) }

  return (
    <div className="container mx-auto mt-20">
      <Header
        numeros={1}
        isAdmin={false}
        t1Valor={tValor}
      />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
