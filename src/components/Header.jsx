function Header({ t1Valor }) {
    const stats = true
    t1Valor(stats)
    
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Seguimiento pacientes{" "}
                <span className="text-indigo-600">Veterinarias</span>
            </h1>
        </>
    )


}
export default Header