import Paciente from "./Paciente"

function ListadoPacientes(pacientes) {
      var pacientes1=pacientes.pacientes
  
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Adminstra tus {""}
                <span className="text-indigo-600 font-bold">pacientes y citas </span>
            </p>

            {pacientes1.length !== 0 ?
                pacientes1.map((paciente) => (
                    console.log(paciente.id),
                <Paciente 
                key={paciente.id}
                paciente={paciente}
                />)) : 
                (<p>No hay pacientes aún</p>)
            }
        </div>
    )
}

export default ListadoPacientes