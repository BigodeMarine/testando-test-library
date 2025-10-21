import React from 'react'
import { fetchTarefas } from '../../data/tarefas'
import TarefasPage from '../../components/TarefasPage'


export default async function Page() {
  const tarefas = await fetchTarefas()
  return <TarefasPage initialTarefas={tarefas} />
}