import { Link } from 'react-router-dom';

export default function Categories() {
    return (
        <>
            <main className="container mx-auto mb-5 mt-5 px-4">
                <h2 className="text-center text-2xl font-bold mt-5">Seleccionar día</h2>
                <hr className="my-4" />

                <div className="w-full max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <Link to="/Lunes" className="p-4 bg-rose-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-950 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Lunes</h2>
                        </Link>

                        <Link to="/Martes" className="p-4 bg-orange-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Martes</h2>
                        </Link>

                        <Link to="/Miercoles" className="p-4 bg-rose-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-950 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Miércoles</h2>
                        </Link>

                        <Link to="/Jueves" className="p-4 bg-orange-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Jueves</h2>
                        </Link>

                        <Link to="/Viernes" className="p-4 bg-rose-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-950 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Viernes</h2>
                        </Link>

                        <Link to="/Sabado" className="p-4 bg-orange-600 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 hover:shadow-xl">
                            <h2 className="text-xl font-semibold">Sábado</h2>
                        </Link>

                    </div>
                </div>
            </main>
        </>
    );
}
