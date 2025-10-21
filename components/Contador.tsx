'use client'
import React from 'react'
import useContadorDeTarefas from '../hooks/useContadorDeTarefas'

export default function Contador({ tarefas }: { tarefas: any[] }) {
    const total = useContadorDeTarefas(tarefas)
    return <div role="status">Total de tarefas: {total}</div>
}