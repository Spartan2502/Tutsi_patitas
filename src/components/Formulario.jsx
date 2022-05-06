
export default function Formulario() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 ">
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="NombreM">
                        Mascota
                    </label>
                    <input
                        id="NombreM"
                        type="text"
                        placeholder="Nombre de la mascota "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
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
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
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
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold" htmlFor="Alta">
                        Alta
                    </label>
                    <input
                        id="Alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
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
                    />
                    <input type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                        value="Agregar paciente" />
                </div>
            </form>
        </div>
    )
}
