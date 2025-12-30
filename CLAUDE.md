# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Liburi** is a vacation/staycation property booking website built with React 19, TypeScript, and Vite. The application follows Clean Architecture principles with a clear separation between presentation, infrastructure, and shared layers.

## Development Commands

```bash
npm run dev          # Start development server (Vite)
npm run build        # TypeScript compilation + production build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Architecture

### Directory Structure (Layered Architecture)

```
src/
├── app/router/           # Route definitions
├── infrastructure/       # External concerns (API calls, mock data)
│   ├── api/             # Data fetching functions
│   └── persistence/     # Mock data sources
├── presentation/         # UI layer
│   ├── components/
│   │   ├── features/    # Feature-specific components (landing, detail)
│   │   └── ui/          # Reusable UI components
│   ├── layouts/         # Page layout wrappers
│   └── pages/           # Route page components
└── shared/              # Cross-cutting concerns
    ├── types/           # TypeScript type definitions
    └── utils/           # Shared utility functions
```

### Path Aliases

Import paths use these aliases (configured in `vite.config.ts` and `tsconfig.json`):

| Alias | Resolves to |
|-------|-------------|
| `@` | `src/` |
| `@components` | `src/presentation/components/` |
| `@layouts` | `src/presentation/layouts/` |
| `@shared` | `src/shared/` |
| `@assets` | `src/assets/` |
| `@lib` | `src/lib/` |
| `@infrastructure` | `src/infrastructure/` |

### Routing

Uses **React Router v7** with lazy-loaded routes defined in `src/app/router/landing.ts`:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | AboutUs | About page |
| `/detail/:id` | Detail | Property detail page |

All routes use `LandingLayout` as the parent layout.

## Component Patterns

### Compound Component Pattern

Many UI components use compound patterns where subcomponents are attached to the root:

```tsx
// Usage examples
<Banner.Content />
<Footer.WrapperContent.Title />
<Navbar.Title />
<Testimonial.Image />
```

Subcomponents are attached via `Object.assign()` in the component file:

```tsx
const Banner = ({ ... }) => { ... };
Object.assign(Banner, { Content: BannerContent });
export default Banner;
```

### Component Locations

- **Feature components**: `src/presentation/components/features/{pageName}/`
- **Reusable UI**: `src/presentation/components/ui/`

## Data Fetching

- **Library**: TanStack Query (React Query) + Axios
- **API layer**: `src/infrastructure/api/`
- **Mock data**: `src/infrastructure/persistence/mock.ts`
- **Public JSON files**: `public/detail.json`, `public/treasure-product.json`

API functions include simulated delays (3 seconds) for loading state demonstration.

```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ["detail-product"],
  queryFn: fetchDetailProductJson,
});
```

## Styling

- **CSS Framework**: Tailwind CSS v4 (imported via `@import "tailwindcss"`)
- **Color Space**: OKLCH (modern perceptual color space)
- **Theme Variables**: Custom CSS variables in `src/index.css`
  - Primary: `#3252DF` (Liburi blue)
  - Light/dark mode support via `.dark` class
- **Font**: Poppins (300-700 weights) via `@fontsource/poppins`
- **Animations**: AOS (Animate On Scroll) for scroll-triggered animations, Lottie for complex animations

### Utility

```tsx
import { cn } from "@lib/utils";
// Merges Tailwind classes intelligently
cn("class1", condition && "class2", "class3")
```

## Type Definitions

Global types are defined in `src/shared/types/global.ts`:
- `IItem` - Facility item (icon, name, count)
- `IProduct` - Property (id, name, location, price, imgUrl, isRecommended)
- `IListProduct` - Product list by category
- `IItemContentFooter`, `IContentFooter` - Footer link structures

## State Management

- **Server State**: TanStack Query
- **Client State**: React Router hooks (`useNavigate`, `useLocation`)
- **Global State**: Zustand is installed but not currently used

## Linting & Type Safety

- **TypeScript**: Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- **ESLint**: TypeScript ESLint + React Hooks + React Refresh plugins
