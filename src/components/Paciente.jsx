
const Paciente = () => {
    return (
        <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-md">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">perro1</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">persona1</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">Correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
                <span className="font-normal normal-case">10 febrero 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">sintomas: {""}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia pariatur nobis eos excepturi odio soluta. Excepturi sapiente temporibus totam quam at omnis facere cupiditate voluptate? Delectus temporibus voluptate dignissimos!</span>
            </p>

        </div>)
}

export default Paciente