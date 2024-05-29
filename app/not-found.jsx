import Link from "next/link";

const notFound = () => {
    return (
        <div className="text-center">
            <h2>404</h2>
            <p className="p-4">Pagina no encontrada</p>
            <div>
                <Link className=" p-4 rounded-md bg-emerald-300" href="/">
                    Regresar al inicio
                </Link>
            </div>
        </div>
    );
};

export default notFound;
