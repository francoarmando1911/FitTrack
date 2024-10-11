import React, { useState, useEffect } from 'react';

interface Exercise {
    name: string;
    reps: string; // Repeticiones como string
    weight: string; // Peso como string
    series: string; // Series como string
}

interface DailyRoutineProps {
    day: string;
}

const DailyRoutine: React.FC<DailyRoutineProps> = ({ day }) => {
    const [exercises, setExercises] = useState<Exercise[]>(() => {
        const storedExercises = localStorage.getItem(day);
        return storedExercises ? JSON.parse(storedExercises) : [];
    });
    const [exerciseName, setExerciseName] = useState<string>('');
    const [exerciseReps, setExerciseReps] = useState<string>('');
    const [exerciseWeight, setExerciseWeight] = useState<string>('');
    const [exerciseSeries, setExerciseSeries] = useState<string>(''); // Nuevo estado para las series
    const [editIndex, setEditIndex] = useState<number | null>(null);

    useEffect(() => {
        localStorage.setItem(day, JSON.stringify(exercises));
    }, [exercises, day]);

    const addOrUpdateExercise = () => {
        if (exerciseName && exerciseReps && exerciseWeight && exerciseSeries) {
            const newExercise: Exercise = {
                name: exerciseName,
                reps: exerciseReps, // Almacenamos las repeticiones
                weight: exerciseWeight, // Almacenamos el peso
                series: exerciseSeries, // Almacenamos las series como un string
            };

            if (editIndex !== null) {
                setExercises((prev) =>
                    prev.map((exercise, index) =>
                        index === editIndex ? newExercise : exercise
                    )
                );
                setEditIndex(null);
            } else {
                setExercises((prev) => [...prev, newExercise]);
            }

            // Limpiar campos después de agregar/editar
            setExerciseName('');
            setExerciseReps('');
            setExerciseWeight('');
            setExerciseSeries(''); // Limpiar el input de series
        }
    };

    const removeExercise = (index: number) => {
        setExercises((prev) => prev.filter((_, i) => i !== index));
    };

    const editExercise = (index: number) => {
        const exerciseToEdit = exercises[index];
        setExerciseName(exerciseToEdit.name);
        setExerciseReps(exerciseToEdit.reps); // Cargar repeticiones al editar
        setExerciseWeight(exerciseToEdit.weight); // Cargar peso al editar
        setExerciseSeries(exerciseToEdit.series); // Cargar series al editar
        setEditIndex(index);
    };

    return (
        <div className="container mx-auto mt-5 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">{day}</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex flex-col md:flex-row md:space-x-2 w-full">
                    <input
                        type="text"
                        placeholder="Nombre del ejercicio"
                        value={exerciseName}
                        onChange={(e) => setExerciseName(e.target.value)}
                        className="border p-2 mb-2 md:mb-0 md:flex-1"
                    />
                    <input
                        type="text"
                        placeholder="Repeticiones"
                        value={exerciseReps}
                        onChange={(e) => setExerciseReps(e.target.value)}
                        className="border p-2 mb-2 md:mb-0 md:flex-1"
                    />
                    <input
                        type="text"
                        placeholder="Peso"
                        value={exerciseWeight}
                        onChange={(e) => setExerciseWeight(e.target.value)}
                        className="border p-2 mb-2 md:mb-0 md:flex-1"
                    />
                    <input
                        type="text"
                        placeholder="Series (como string)"
                        value={exerciseSeries}
                        onChange={(e) => setExerciseSeries(e.target.value)}
                        className="border p-2 mb-2 md:mb-0 md:flex-1"
                    />
                </div>
                <button
                    onClick={addOrUpdateExercise}
                    className="bg-blue-500 text-white p-2 rounded mt-2 md:mt-0 md:w-auto"
                >
                    {editIndex !== null ? 'Actualizar Ejercicio' : 'Agregar Ejercicio'}
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="mt-5 w-full border border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Ejercicio</th>
                            <th className="border p-2">Repeticiones</th> {/* Columna de repeticiones */}
                            <th className="border p-2">Peso</th> {/* Columna de peso */}
                            <th className="border p-2">Series</th> {/* Columna de series */}
                            <th className="border p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border p-2">{exercise.name}</td>
                                <td className="border p-2">{exercise.reps}</td> {/* Mostrar repeticiones */}
                                <td className="border p-2">{exercise.weight}</td> {/* Mostrar peso */}
                                <td className="border p-2">{exercise.series}</td> {/* Mostrar series */}
                                <td className="border p-2 flex flex-col space-y-2"> {/* Cambiar a flex-col */}
                                    <button
                                        onClick={() => editExercise(index)}
                                        className="bg-green-500 text-white p-1 rounded"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => removeExercise(index)}
                                        className="bg-red-500 text-white p-1 rounded"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DailyRoutine;
