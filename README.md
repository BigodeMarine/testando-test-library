# 📝 Lista de Tarefas — Next.js 15 + Jest + Testing Library

Uma aplicação simples de **listagem e adição de tarefas** construída com **Next.js 15 (App Router)** e **TypeScript**, contendo **testes unitários** com Jest e React Testing Library.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** — Framework React moderno com App Router  
- **TypeScript** — Tipagem estática para maior segurança  
- **React 19** — Biblioteca de componentes declarativos  
- **Jest** — Framework de testes em JavaScript  
- **React Testing Library** — Testes de componentes focados no comportamento do usuário  
- **jest-environment-jsdom** — Ambiente de teste para simular o navegador  
- **ts-jest** — Suporte a TypeScript no Jest  

## ⚙️ Instalação do Projeto

1. **Clone o repositório**  
 git clone https://github.com/BigodeMarine/testando-test-library.git  
 cd next15-last-try  
2. **Instale as dependências**  
npm install  
3. **Execute o servidor de desenvolvimento**  
npm run dev  
Acesse o projeto em:
👉 http://localhost:3000  
  
## 🧪 Executando os Testes  
 1. **Rodar todos os testes**  
  npm test    
 2. **Gerar relatório de cobertura**  
  npm test -- --coverage  

  🧠 Funcionalidades  

  Exibe uma lista de tarefas simulada (como se viesse de uma API).

Permite adicionar novas tarefas via formulário controlado.

Conta o número total de tarefas com um hook personalizado.

Inclui testes unitários para os principais fluxos:

Validação e submissão do formulário de nova tarefa.

Retorno correto do hook useContadorDeTarefas.

Renderização da lista de tarefas.
