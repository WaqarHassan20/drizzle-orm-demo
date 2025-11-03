# Drizzle (Postgres) — quick guide 🧩

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/Postgres-316192?logo=postgresql&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-2EA44F?logo=drizzle&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)

This repository demonstrates using Drizzle ORM with the Postgres driver. Below you'll find a friendly explanation of what Drizzle is, why you might pick it, how it compares to Prisma, quick setup commands, libraries used, and a few handy badges and links for contributors.

---

## What is Drizzle? 🚀

Drizzle is a TypeScript-first ORM for relational databases focused on type safety, small runtime, and explicit SQL generation. It provides a schema builder and strongly-typed query helpers so your database types flow into your application with minimal surprises.

Why people like it:
- Type-safe queries and result inference (excellent TypeScript ergonomics).
- Minimal runtime overhead and transparent SQL generation.
- Flexible: use typed helpers or raw SQL where needed.

## Drizzle vs Prisma — quick comparison ⚖️

Prisma and Drizzle both serve TypeScript developers but with different trade-offs:

- Prisma
  - Batteries-included: schema-first workflow, generated client, migrations, and Studio.
  - Higher-level API that hides SQL behind an expressive client.
  - Larger generated client code and runtime size.

- Drizzle
  - SQL-first and explicit: you can see and control the SQL produced.
  - Smaller runtime and very tight TypeScript typings.
  - Great when you want smaller bundles, explicit queries, or easier mixing with raw SQL.

Pick Prisma for a full-featured, higher-abstraction experience. Pick Drizzle when you want explicit control, smaller runtime, and strong TypeScript guarantees.

---

## Tech Stack & Badges 🧰

- **Runtime:** Bun 🐰
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Drizzle (drizzle-orm + drizzle-kit)

![License](https://img.shields.io/badge/License-MIT-blue)
![Made with Bun](https://img.shields.io/badge/Made%20with-Bun-000000?logo=bun&logoColor=white)

---

## Quick setup (Postgres + Drizzle) 🔧

This project uses **Bun** as the runtime and package manager. Make sure you have Bun installed before proceeding.

### Install Bun 🐰

If you don't have Bun installed yet, get it from [bun.sh](https://bun.sh):

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install dependencies 📦

Install runtime dependencies:

```bash
bun add drizzle-orm pg dotenv
```

Install dev tools (migrations, codegen, types):

```bash
bun add -D drizzle-kit tsx @types/pg
```

### Useful drizzle-kit commands 🛠️

```bash
bunx drizzle-kit generate    # generate SQL migrations from schema
bunx drizzle-kit migrate      # apply migrations to DB
bunx drizzle-kit drop        # drop / reset DB (use with caution)
bunx drizzle-kit studio      # open Drizzle Studio for browsing data
```

### Initializing Drizzle in a project 🚀

1. Create or point to your Postgres database and set `DATABASE_URL` in `.env`:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/mydb
   ```

2. Define your schema using Drizzle helpers (like `src/db/schema.ts`).

3. Use `drizzle-kit` to generate types and manage migrations:
   ```bash
   bunx drizzle-kit generate
   bunx drizzle-kit migrate
   ```

4. Start building your app with type-safe queries!

---

## Libraries used (in this repo) 📦

| Library | Purpose | Version |
|---------|---------|---------|
| **drizzle-orm** | Core TypeScript ORM tools | Latest |
| **drizzle-kit** | Migrations, codegen, and Studio | Latest |
| **pg** | Postgres driver for Node/Bun | Latest |
| **dotenv** | Environment variable loader | Latest |
| **tsx** | TypeScript runner for dev (optional) | Latest |
| **@types/pg** | TypeScript types for pg | Latest |

All packages are managed via **Bun** and listed in `package.json`.

---

## Tips & best practices ✨

- Keep your SQL migrations and schema definitions under version control.
- Use indexes for columns used frequently in WHERE/JOIN and validate with EXPLAIN.
- Prefer typed Drizzle queries and use raw SQL only when necessary.

---

## About the author / repository owner 👋

Hi! This project is maintained as a demo of Drizzle with Postgres. Add your name, contact details, or socials here.

If you'd like to include a short bio, example:

> Waqar Hassan — Fullstack developer. Twitter: @waqarhassan20 — GitHub: WaqarHassan20

Replace the above with your real info or leave it as a placeholder.

---

## Contributing & ⭐ Star / Fork

If you find this project useful, please give it a star on GitHub and feel free to fork it to experiment.

- To contribute: fork -> create a branch -> open a pull request
- To report issues: use the repo's Issues tab

Thanks for checking this out — contributions and stars are appreciated!

---

## Links & resources 🔗

- [Drizzle ORM GitHub](https://github.com/drizzle-team/drizzle-orm)
- [Drizzle Documentation](https://orm.drizzle.team/)
- [Drizzle Kit (migrations & codegen)](https://orm.drizzle.team/kit)
- [Bun.sh Official Site](https://bun.sh)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Built with ❤️ using Bun, TypeScript, and Drizzle ORM**

