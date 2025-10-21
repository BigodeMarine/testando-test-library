export type Tarefa = {
    id: string
    titulo: string
}

const tarefasIniciais: Tarefa[] = [
    { id: '1', titulo: 'Aprender Next.js 15' },
    { id: '2', titulo: 'Escrever testes com Jest' },
]

export function fetchTarefas(): Promise<Tarefa[]> {
    return Promise.resolve(tarefasIniciais)
}