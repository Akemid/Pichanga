# Soccer Team Manager

A web application that helps organize weekly soccer games among friends by creating balanced teams and managing tournament-style gameplay.

## Project Structure

The application follows Angular's standalone component architecture with modern TypeScript best practices:

```
src/app/
├── core/                  # Cross-cutting concerns
│   ├── interceptors/      # HTTP interceptors
│   ├── guards/           # Route guards
│   ├── config/           # Global configuration
│   └── services/         # Core services
├── shared/               # Reusable components and utilities
│   ├── components/       # Shared UI components
│   ├── directives/       # Custom directives
│   ├── pipes/           # Custom pipes
│   ├── models/          # Shared interfaces and types
│   ├── adapters/        # Data transformation utilities
│   └── utils/           # Helper functions
└── features/            # Feature-specific modules
    ├── player-management/
    ├── team-creation/
    ├── tournament-management/
    └── match-management/
```

## TypeScript Path Mapping

The project uses TypeScript path mapping for clean imports:

- `@core/*` - Core module imports
- `@shared/*` - Shared module imports
- `@features/*` - Feature module imports
- `@player-management/*` - Player management feature
- `@team-creation/*` - Team creation feature
- `@tournament-management/*` - Tournament management feature
- `@match-management/*` - Match management feature

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm start
```

### Build

```bash
pnpm run build
```

### Testing

```bash
pnpm run test --watch=false
```

### Linting

```bash
pnpm run lint
pnpm run lint:fix
```

## Technology Stack

- **Framework**: Angular 21 with standalone components
- **UI Library**: Angular Material
- **Language**: TypeScript with strict mode
- **Package Manager**: pnpm
- **Testing**: Vitest + fast-check (property-based testing)
- **Linting**: ESLint with Angular and TypeScript rules
- **Internationalization**: Angular i18n (Spanish - Peru)
- **Storage**: Browser localStorage

## Features

- Player management with detailed statistics
- Automatic and manual team creation
- Tournament management with elimination rounds
- Real-time match scoring
- Spanish localization (es-PE)
- Material Design interface
