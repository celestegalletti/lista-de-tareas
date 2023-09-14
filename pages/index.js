import Link from 'next/link';

function HomePage({ tasks }) {
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <ul>
                {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <Link href="/create">Crear Tarea</Link>
        </div>
    );
}

export async function getServerSideProps() {

    const predefinidas = [
        { id: 1, title: 'Tarea 1' },
        { id: 2, title: 'Tarea 2' },
        { id: 3, title: 'Tarea 3' },
    ];

    return {
        props: {
        tasks: predefinidas,
        },
    };
    }

export default HomePage;