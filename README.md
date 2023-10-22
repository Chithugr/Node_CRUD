


# Node_CRUD
Crud Operation on blog post and category

Step-1
  Clone the project
Step-2
  do `npm i`
Step-3
  Create .env file and add poer, dbUrl(mongodb databse url including name, password and database name)
Step-4
  Start your project using command `npm start`
Step-5
  Test your apis, Happy!!!


# Backend Developer Exercise-1

// TODO: CRUD Operation on blog post and category

## Stack

1. Data Layer (DB): postgres+ prisma (schema generation, migration handling)
2. Data Access Layer (Prisma ORM): Prisma
3. Business Logic layer (Server): tRPC, express
4. Transport Layer (TLS + HTTP):
5. Data Access Layer (Client): mobx + tRPC
6. Business Logic Layer (client): tRPC (access server methods)
7. Presentation layer (client): react + electron

## Dependencies

### Electron

// how and why, common usage, DONT

### React

// how and why, common usage, DONT

### tRPC

### Prisma

## Team

## Getting Started

### `.env`

Ask [Ibrahim Ali](@GeorgeIpsum) for dev .env values

Below are the full list of `env` vars that are expanded within the codebase:

```.env
asdf
```

### Project Setup

```zsh
# Postinstall scripts will handle setting up Electron and Prisma
> npm install

# This will run initial migrations against your db and create the db instance if it does not exist
> npx prisma migrate dev

# Runs everything in dev environment (nodemon + SWC for backend and electron-vite dev for frontend)
> npm run dev
```

## Code Structure and Style

### Tools

### Naming Conventions

## Monorepo Structure

Below are logical groupings of the different components of this monorepo.

### Path Aliasing

Path aliasing

### Server

The server application is bootstrapped in `server/index.ts`, with different launch configurations depending on environment.

```
📦beacon
 ┣ 📂server
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📘base.ts
 ┃ ┃ ┣ 📘config.ts
 ┃ ┃ ┣ 📘external.ts
 ┃ ┃ ┗ 📘index.ts
 ┃ ┣ 📂resources             <-- Controller logic stored here
 ┃ ┃ ┣ 📂[resource-name]     <-- e.g. user, organization, xdex
 ┃ ┃ ┃ ┣ 📘index.ts
 ┃ ┃ ┃ ┣ 📘mutations.ts
 ┃ ┃ ┃ ┣ 📘queries.ts
 ┃ ┃ ┃ ┣ 📘subscriptions.ts
 ┃ ┃ ┃ ┗ 📘validators.ts
 ┃ ┃ ┗ 📘index.ts
 ┃ ┣ 📂services              <-- e.g. supabase, clickhouse
 ┃ ┃ ┗ (📂|📘)[service]
 ┃ ┣ 📁utils
 ┃ ┣ 📘_dev.ts
 ┃ ┣ 📘app.ts
 ┃ ┣ 📘ee.ts
 ┃ ┣ 📘index.ts
 ┃ ┣ 📘log.ts
 ┃ ┣ 📘setup.ts
 ┃ ┣ 📘prisma.ts
 ┃ ┣ 📘trpc.ts
 ┃ ┣ 📘types.d.ts
 ┃ ┗ 📒free_mail.json
 ┣ 📂prisma
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📂[migration_id]
 ┃ ┃ ┃ ┗ 📜migration.sql
 ┃ ┃ ┗ 📜migration_lock.toml
 ┃ ┣ 📂seed
 ┃ ┃ ┗ 📘seed.ts
 ┃ ┗ 📜schema.prisma
 ┣ 📒.swcrc
 ┗ 📒tsconfig.server.json
```
