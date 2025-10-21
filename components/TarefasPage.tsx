'use client'
import React, { useState } from 'react'
import { Tarefa } from '../data/tarefas'
import NovaTarefa from './NovaTarefa'
import Contador from './Contador'

export default function TarefasPage({ initialTarefas }: { initialTarefas: Tarefa[] }) {
    const [tarefas, setTarefas] = useState<Tarefa[]>(initialTarefas)


    function adicionarTarefa(titulo: string) {
        const nova = { id: String(Date.now()), titulo }
        setTarefas((s) => [nova, ...s])
    }

    return (
        <main>
            <h1>Minhas Tarefas</h1>
            <NovaTarefa onAdd={adicionarTarefa} />
            <Contador tarefas={tarefas} />
            <ul>
                {tarefas.map((t) => (
                    <li key={t.id}>{t.titulo}</li>
                ))}
            </ul>
        </main>
    )
}