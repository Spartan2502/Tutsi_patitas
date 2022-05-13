import { useState, useEffect } from 'react'
import { Error } from './Error'


export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)


    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }
    }, [paciente])



    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion del formulario 
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }


        setError(false)
        //objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,

        }

        if (paciente.id) {
            //editando el registro
            objetoPaciente.id = paciente.id
            //map va a buscar el objeto con el mismo ID que paciente.id si lo encuentra va a regresar el paciente actualizado sino va a mandar el objeto que ya teniamos
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            //Seteamos los nuevo pacientes
            setPacientes(pacientesActualizados)
            setPaciente({})
        }
        else {
            //nuevo registro
            objetoPaciente.id = generarId()
            //guardar los pacientes
            setPacientes([...pacientes, objetoPaciente])
        }




        //reiniciar el fomr
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')




    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                action="" className="bg-white shadow-md rounded-lg py-10 px-5 "
            >

                {/* {error?'Si hay un error':'No hay error'} */}
                {/* {error && "si hay error"} */}
                {error && <Error>Todos los campos son obligatorios!!!</Error>}

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="NombreM">
                        nombre Mascota
                    </label>
                    <input
                        id="NombreM"
                        type="text"
                        placeholder="Nombre de la mascota "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="NombreP">
                        Nombre del Propietario
                    </label>
                    <input
                        id="NombreP"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="Email">
                        Email
                    </label>
                    <input
                        id="Email"
                        type="Email"
                        placeholder="Email contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="Alta">
                        Alta
                    </label>
                    <input
                        id="Alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="Sintomas">
                        Sintomas
                    </label>
                    <textarea
                        id="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Desribe los sintomas..."
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />


                    <input type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />
                </div>
            </form>
        </div>
    )
}
