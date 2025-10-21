import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NovaTarefa from '../components/NovaTarefa'

describe('<NovaTarefa />', () => {
    test('renderiza input e botão desabilitado quando vazio', () => {
        const mock = jest.fn()
        render(<NovaTarefa onAdd={mock} />)

        expect(screen.getByLabelText(/nova tarefa/i)).toBeInTheDocument()
        const botao = screen.getByRole('button', { name: /adicionar/i })
        expect(botao).toBeDisabled()
    })

    test('chama onAdd ao submeter com valor válido', async () => {
        const user = userEvent.setup()
        const mock = jest.fn()
        render(<NovaTarefa onAdd={mock} />)

        const input = screen.getByPlaceholderText(/título da tarefa/i)
        await user.type(input, 'Nova tarefa de teste')
        const botao = screen.getByRole('button', { name: /adicionar/i })
        expect(botao).toBeEnabled()
        await user.click(botao)

        expect(mock).toHaveBeenCalledWith('Nova tarefa de teste')
        expect(input).toHaveValue('')
    })
})