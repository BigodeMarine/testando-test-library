import { renderHook } from '@testing-library/react'
import useContadorDeTarefas from '../hooks/useContadorDeTarefas'

describe('useContadorDeTarefas', () => {
    test('retorna o número correto de tarefas', () => {
        const tarefas = [{ id: '1' }, { id: '2' }, { id: '3' }]
        const { result } = renderHook(() => useContadorDeTarefas(tarefas))
        expect(result.current).toBe(3)
    })

    test('retorna zero quando array vazio', () => {
        const { result } = renderHook(() => useContadorDeTarefas([]))
        expect(result.current).toBe(0)
    })
})