# TechStore EU

🟢 Live Demo: https://tech-eu.vercel.app


# TechStoreEU ⚡

E-commerce store for tech hardware (GPUs, PCs, Monitors, Laptops) targeting Germany 🇩🇪 and United Kingdom 🇬🇧 markets.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Angular 19 + SSR + SCSS |
| State | Angular Signals |
| i18n | @ngx-translate (EN / DE) |
| Backend | NestJS + Prisma |
| Database | PostgreSQL |
| Currency | EUR / GBP toggle |

## Project Structure

```
e-commerce/
├── backend/          # NestJS REST API (port 3001)
│   ├── prisma/       # Schema, migrations, seed
│   └── src/          # Modules: products, categories, orders
├── frontend/         # Angular 19 SSR (port 4200 dev / 4000 prod)
│   ├── public/       # Static assets, i18n JSON, images
│   └── src/
│       ├── app/
│       │   ├── core/         # Models, ApiService, CartStore (Signals)
│       │   ├── pages/        # home, catalog, product, cart, checkout, about, shipping, returns, contacts, faq
│       │   └── shared/       # Header, Footer, ProductCard, PricePipe
│       └── environments/
└── package.json      # Monorepo scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL running locally

### Install

```bash
npm run install:all
```

### Configure

```bash
cp backend/.env.example backend/.env
# Fill in DATABASE_URL in backend/.env
```

### Seed database

```bash
cd backend
npx ts-node prisma/seed.ts
```

### Run in development

```bash
npm run dev:all
```

- Frontend: http://localhost:4200
- Backend: http://localhost:3001
- Swagger: http://localhost:3001/docs

### Stop

```bash
npm run dev:stop
```

### Production build

```bash
npm run build:all
# Then start SSR server:
cd frontend && npm run serve:ssr:frontend
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | List products (filters: category, brand, search, maxPrice, onSale, featured, page, limit) |
| GET | `/products/:slug` | Single product |
| GET | `/categories` | All categories |
| GET | `/products/brands` | All brands |
| POST | `/orders` | Create order |

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, featured products, reviews |
| `/catalog` | Catalog with filters |
| `/product/:slug` | Product detail |
| `/cart` | Shopping cart |
| `/checkout` | Checkout form |
| `/about` | About us |
| `/shipping` | Shipping & payment info |
| `/returns` | Return policy |
| `/contacts` | Contact info |
| `/faq` | FAQ accordion |

## Features

- 🌍 EN / DE language switch
- 💶 EUR / GBP currency toggle
- 🛒 Cart with quantity controls (persisted in Signals)
- 📦 61 seeded products across 4 categories
- 🖥️ Angular SSR for production
- 📱 Responsive design
