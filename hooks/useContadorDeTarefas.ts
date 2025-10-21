'use client'
import { useMemo } from 'react'

export default function useContadorDeTarefas(tarefas: Array<any>) {
    const contador = useMemo(() => tarefas.length, [tarefas])
    return contador
}