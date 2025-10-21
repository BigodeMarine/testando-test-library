import React from 'react'
import { render, screen } from '@testing-library/react'
import TarefasPage from '../components/TarefasPage'
import { Tarefa } from '../data/tarefas'


const mockTarefas: Tarefa[] = [
    { id: 'a', titulo: 'Tarefa A' },
    { id: 'b', titulo: 'Tarefa B' },
]


describe('<TarefasPage />', () => {
    test('renderiza a lista de tarefas inicial', () => {
        render(<TarefasPage initialTarefas={mockTarefas} />)
        expect(screen.getByText('Tarefa A')).toBeInTheDocument()
        expect(screen.getByText('Tarefa B')).toBeInTheDocument()
        expect(screen.getByRole('status')).toHaveTextContent('Total de tarefas: 2')
    })
})