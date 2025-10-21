'use client'
import React, { useState } from 'react'

type Props = {
    onAdd: (titulo: string) => void
}

export default function NovaTarefa({ onAdd }: Props) {
    const [valor, setValor] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const titulo = valor.trim()
        if (!titulo) return
        onAdd(titulo)
        setValor('')
    }

    return (
        <form onSubmit={handleSubmit} aria-label="form-nova-tarefa">
            <label htmlFor="titulo">Nova tarefa</label>
            <input
                id="titulo"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Título da tarefa"
            />
            <button type="submit" disabled={!valor.trim()}>
                Adicionar
            </button>
        </form>
    )
}