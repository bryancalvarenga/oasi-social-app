# Oasi — Guia Rápido de Desenvolvimento

Este guia explica como configurar o ambiente local para trabalhar no projeto Oasi (Next.js + Prisma + PostgreSQL + Docker).

## 1. Requisitos

Antes de começar, instale:

- Node.js 18+
- Docker e Docker Compose
- npm (ou yarn/pnpm)

## 2. Subir o banco de dados (PostgreSQL)

O projeto usa Docker para rodar o banco localmente.

Execute:

```
docker compose -f infra/compose.yaml up -d
```

Verifique se o container subiu:

```
docker ps
```

## 3. Criar o arquivo .env

Na raiz do projeto, crie um arquivo chamado `.env`:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/oasi"
```

## 4. Instalar dependências

```
npm install
```

## 5. Configurar o Prisma

Gerar o client:

```
npx prisma generate
```

Rodar migrations:

```
npx prisma migrate dev
```

## 6. Rodar a aplicação

```
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

## Pronto!

Ambiente configurado!
Se tiver problemas, verifique:

- Docker rodando
- Porta 5432 livre
- Arquivo .env criado corretamente
- Prisma atualizado (`npx prisma generate`)
