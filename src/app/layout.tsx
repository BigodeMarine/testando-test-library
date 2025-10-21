import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
    title: 'Lista de Tarefas',
    description: 'App simples de listagem e adição de tarefas com Next.js 15',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}