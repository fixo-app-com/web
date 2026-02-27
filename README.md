# Fixo Landing Page

Landing page for **Fixo**, a personal finance management app. Built with React 19 and TypeScript, featuring a dark-themed UI with 3D scroll-driven animations, smooth Framer Motion transitions, and a responsive Tailwind CSS layout.

## Tech Stack

- **React 19** + **TypeScript** — UI framework with strict type checking
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **Framer Motion** — scroll and entrance animations
- **Three.js** (React Three Fiber + Drei) — 3D parallax background
- **Firebase Hosting** — deployment
- **Vitest** + **React Testing Library** — unit tests
- **Cypress** — end-to-end tests
- **ESLint 9** + **Prettier** — linting and formatting
- **GitHub Actions** — CI/CD pipeline

## Prerequisites

- Node.js >= 20
- npm

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Scripts

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Start Vite dev server with HMR             |
| `npm run build`    | Production build to `dist/`                |
| `npm run preview`  | Preview production build locally           |
| `npm run lint`     | Run ESLint                                 |
| `npm run lint:fix` | Run ESLint with auto-fix                   |
| `npm run format`   | Format source files with Prettier          |
| `npm run test`     | Run unit tests (Vitest)                    |
| `npm run test:watch` | Run unit tests in watch mode             |
| `npm run typecheck`| Run TypeScript compiler checks             |
| `npm run e2e`      | Run Cypress E2E tests (headless)           |
| `npm run e2e:open` | Open Cypress test runner                   |
| `npm run deploy`   | Build and deploy to Firebase Hosting       |

## Project Structure

```
src/
├── main.tsx                       # App entry point
├── App.tsx                        # Root component — assembles all sections
├── index.css                      # Global styles and Tailwind imports
├── test/
│   └── setup.ts                   # Vitest + jest-dom setup
└── components/
    ├── animations.ts              # Shared Framer Motion animation variants
    ├── Navbar/
    │   ├── Navbar.tsx
    │   └── Navbar.test.tsx
    ├── Hero/
    │   ├── Hero.tsx
    │   └── Hero.test.tsx
    ├── AppPreview/
    │   ├── AppPreview.tsx
    │   └── AppPreview.test.tsx
    ├── Features/
    │   ├── Features.tsx
    │   └── Features.test.tsx
    ├── HowItWorks/
    │   ├── HowItWorks.tsx
    │   └── HowItWorks.test.tsx
    ├── Testimonial/
    │   ├── Testimonial.tsx
    │   └── Testimonial.test.tsx
    ├── CallToAction/
    │   ├── CallToAction.tsx
    │   └── CallToAction.test.tsx
    ├── Footer/
    │   ├── Footer.tsx
    │   └── Footer.test.tsx
    └── ThreeBackground/
        ├── ThreeBackground.tsx    # Lazy-loaded 3D canvas
        ├── Scene.tsx              # Three.js scene composition
        ├── constants.ts           # 3D scene parameters
        ├── hooks/
        │   └── useScrollProgress.ts
        └── objects/
            ├── Coin.tsx
            ├── FloatingRing.tsx
            ├── GlassSphere.tsx
            ├── FloatingDiamonds.tsx
            └── BarChart.tsx
```

## CI/CD

The GitHub Actions pipeline (`.github/workflows/ci.yml`) runs on every push to `main`:

1. **Build** — lint, unit tests, production build
2. **E2E** — Cypress tests against the preview server
3. **Deploy** — deploys to Firebase Hosting (requires `FIREBASE_SERVICE_ACCOUNT` secret)

## Deployment

Manual deployment:

```bash
npm run deploy
```

This builds the app and deploys to Firebase Hosting. Make sure the Firebase CLI is installed and you are authenticated.
