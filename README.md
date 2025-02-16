# Cognito

Cognito é um SaaS desenvolvido como Prova de Conceito (PoC) para estudos, oferecendo soluções modernas para facilitar o processo de avaliações em escolas. O objetivo é substituir planilhas tradicionais por uma plataforma intuitiva e eficiente, ajudando professores a gerenciar melhor suas avaliações.

## ✨ Funcionalidades

- Criar e gerenciar provas e quizzes
- Correção automática com base em gabaritos
- Geração de relatórios de desempenho dos alunos
- Exportação de resultados em diversos formatos (PDF, CSV)
- Interface intuitiva para professores e gestores

## 🛠 Tecnologias Utilizadas

- **Framework:** Next.js com Server Actions
- **Banco de Dados:** PostgreSQL com Prisma ORM
- **Autenticação:** Auth.js
- **Interface:** shadcn/ui
- **Hospedagem:** Vercel

## ⚡ Como Rodar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/cognito.git
   cd cognito
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente (crie um arquivo `.env` na raiz do projeto):
   ```sh
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/cognito
   AUTH_SECRET=sua-chave-auth
   ```
4. Execute as migrações do Prisma:
   ```sh
   npx prisma migrate dev
   ```
5. Inicie o projeto:
   ```sh
   npm run dev
   ```
6. Acesse no navegador: `http://localhost:3000`

## 🌟 Contribuição

Se quiser contribuir, fique à vontade para abrir uma **issue** ou enviar um **pull request**!
