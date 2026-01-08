# Soccer Team Manager - Design Document

## Overview

The Soccer Team Manager is a client-side Angular application that facilitates weekly soccer games among friends. The application manages player profiles with detailed statistics, creates balanced teams through manual or automatic algorithms, and runs elimination-style tournaments with configurable match rules. Built with Angular Material Design components and styled with Tailwind CSS utilities, the application provides an intuitive, responsive interface for organizing and managing soccer sessions without requiring backend services.

## Architecture

The application follows Angular's standalone component architecture with modern TypeScript best practices and a clear separation of concerns:

- **Presentation Layer**: Angular Material standalone components with OnPush change detection
- **Service Layer**: Angular services using inject() function for dependency injection
- **Data Layer**: Browser localStorage for persistence with dedicated API services
- **State Management**: Signal-based state management with computed() for derived state

### Project Structure

The application follows the specified folder structure for maintainability and scalability:

```
src/app/
│
├── core/                  # Cross-cutting concerns (interceptors, guards, global config)
│   ├── interceptors/
│   ├── guards/
│   └── config/
│
├── shared/                # Reusable components and utilities
│   ├── components/        # Shared UI components
│   ├── directives/        # Custom directives
│   ├── pipes/            # Custom pipes
│   ├── models/           # Shared interfaces and types
│   ├── adapters/         # Data transformation utilities
│   └── utils/            # Helper functions
│
├── features/             # Feature-specific modules
│   ├── player-management/
│   │   ├── providers/    # HTTP services for player API
│   │   ├── services/     # Business logic services
│   │   ├── models/       # Player-specific interfaces
│   │   ├── adapters/     # Data transformers
│   │   ├── pages/        # Route components
│   │   └── components/   # Feature-specific components
│   │
│   ├── team-creation/
│   ├── tournament-management/
│   └── match-management/
│
└── app.config.ts         # Application configuration
```

### Core Modules

1. **Player Management Feature**: Handles player CRUD operations and statistics
2. **Team Creation Feature**: Manages manual and automatic team formation
3. **Tournament Management Feature**: Controls match progression and elimination logic
4. **Match Management Feature**: Handles real-time scoring and match state
5. **Shared Module**: Reusable components, pipes, and utilities

## Components and Interfaces

### Modern Angular Component Design

All components will be implemented as standalone components following modern Angular patterns:

- Use `input()` and `output()` functions instead of decorators
- Implement `ChangeDetectionStrategy.OnPush` for performance
- Use signal-based state management with `computed()` for derived state
- Employ native control flow (`@if`, `@for`, `@switch`) in templates
- Avoid `ngClass` and `ngStyle` in favor of direct class and style bindings

### Styling Architecture

The application combines Angular Material components with Tailwind CSS utilities for optimal design consistency and development efficiency:

**Tailwind CSS Integration:**
- Primary styling approach using utility-first CSS classes
- Responsive design with Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Consistent spacing, colors, and typography through Tailwind's design system
- Custom color palette extensions for soccer-specific branding
- Utility classes for layout (flexbox, grid), spacing (margin, padding), and visual effects

**Angular Material Integration:**
- Structural components (buttons, cards, tables, dialogs, snackbars)
- Form controls (inputs, selects, checkboxes) with Material Design behavior
- Navigation components (toolbar, sidenav, tabs)
- Tailwind utilities applied to Material components for custom styling

**Custom SCSS Usage:**
- Reserved for complex animations that cannot be achieved with Tailwind
- Component-specific styles that require CSS-in-JS or complex selectors
- Material Design theme customization and CSS custom properties
- Advanced responsive layouts requiring custom media queries

**Styling Guidelines:**
- Prefer Tailwind utilities for all standard styling needs
- Use Material components for interactive elements and form controls
- Apply Tailwind classes to Material components for spacing and colors
- Create custom SCSS only when Tailwind utilities are insufficient

### Player Interface
```typescript
interface Player {
  id: string;
  name: string;
  statistics: PlayerStatistics;
  positions: Position[];
  isActive: boolean;
}

interface PlayerStatistics {
  strength: number; // 1-10 scale
  speed: number; // 1-10 scale
  dribbling: number; // 1-10 scale
  age: number;
}

enum Position {
  GOALKEEPER = 'portero',
  DEFENDER = 'defensa',
  MIDFIELDER = 'mediocampista',
  FORWARD = 'delantero'
}
```

### Team Interface
```typescript
interface Team {
  id: string;
  name: string;
  players: Player[];
  averageStatistics: PlayerStatistics;
  positionCoverage: PositionCoverage;
}

interface PositionCoverage {
  goalkeeper: number;
  defender: number;
  midfielder: number;
  forward: number;
}
```

### Match Interface
```typescript
interface Match {
  id: string;
  team1: Team;
  team2: Team;
  score: MatchScore;
  duration: number; // in minutes
  status: MatchStatus;
  startTime: Date;
  endTime?: Date;
}

interface MatchScore {
  team1Goals: number;
  team2Goals: number;
}

enum MatchStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed'
}
```

### Tournament Interface
```typescript
interface Tournament {
  id: string;
  teams: Team[];
  matches: Match[];
  currentMatch?: Match;
  settings: TournamentSettings;
  status: TournamentStatus;
}

interface TournamentSettings {
  matchDuration: number; // in minutes
  teamSize: number; // 4-8 players
  numberOfTeams: number; // 2-8 teams
}

enum TournamentStatus {
  SETUP = 'setup',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed'
}
```

## Data Models

### Player Statistics Calculation
- **Overall Rating**: Weighted average of strength (30%), speed (25%), dribbling (25%), age factor (20%)
- **Age Factor**: Inverse relationship where younger players get slight bonus, older players get experience bonus
- **Position Suitability**: Multipliers based on position requirements (goalkeepers prioritize different stats)

### Team Balance Algorithm
The automatic team creation uses a greedy algorithm with the following steps:
1. Calculate overall rating for each player
2. Sort players by rating (descending)
3. Distribute players using snake draft pattern (1st team gets 1st pick, last team gets 2nd pick, etc.)
4. Validate position coverage for each team
5. Apply position-based adjustments if coverage is insufficient

### Tournament Elimination Logic
- **Winner Advances**: Winning team stays active for next match
- **Loser Rests**: Losing team becomes inactive until tournament reset
- **Next Opponent**: System selects next available team (round-robin style among remaining teams)
- **Tie Breaking**: Implements the specific rules outlined in requirements

## Data Models

### Local Storage Schema
```typescript
interface AppData {
  players: Player[];
  tournaments: Tournament[];
  settings: AppSettings;
  version: string;
}

interface AppSettings {
  defaultMatchDuration: number;
  defaultTeamSize: number;
  theme: 'light' | 'dark';
  locale: 'es-PE'; // Peruvian Spanish
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

After reviewing all testable properties from the prework analysis, several redundancies were identified and consolidated:
- Properties 1.1 and 1.4 both test data persistence and are combined into a comprehensive round-trip property
- Properties 5.1 and 5.2 both test scoring functionality and are consolidated into score update consistency
- Properties 3.2 and 5.3 both test win condition logic and are merged into win condition enforcement
- Properties 7.1-7.5 all relate to Spanish language consistency and are combined into a single comprehensive property

### Core Properties

**Property 1: Player data round-trip consistency**
*For any* valid player with name, statistics, and positions, storing the player and then retrieving it should return equivalent data
**Validates: Requirements 1.1, 1.4**

**Property 2: Position assignment preservation**
*For any* player and any valid combination of positions, assigning those positions should result in the player having exactly those positions when retrieved
**Validates: Requirements 1.2**

**Property 3: Player deletion cascades correctly**
*For any* player that exists in teams, deleting that player should remove them from all team rosters and the player should no longer be retrievable
**Validates: Requirements 1.5**

**Property 4: Automatic team balance**
*For any* set of players with varying statistics, automatic team creation should produce teams where the difference in average overall ratings is minimized
**Validates: Requirements 2.1**

**Property 5: Position coverage validation**
*For any* team configuration, the team should have at least one player capable of playing each essential position (goalkeeper, defender, midfielder, forward)
**Validates: Requirements 2.3**

**Property 6: Team quantity compliance**
*For any* valid team count between 2 and 8, the system should create exactly that number of teams
**Validates: Requirements 2.4**

**Property 7: Team size compliance**
*For any* valid team size between 4 and 8 players, all created teams should have exactly that number of players
**Validates: Requirements 2.5**

**Property 8: Match duration validation**
*For any* duration value, the system should accept values between 10 and 60 minutes and reject all others
**Validates: Requirements 3.1**

**Property 9: Win condition enforcement**
*For any* match in progress, when a team reaches 2 or more goals, the match should immediately end with that team declared winner
**Validates: Requirements 3.2, 5.3**

**Property 10: Tournament progression consistency**
*For any* tournament state, when a match concludes, the winning team should advance to available status and the losing team should be marked as resting
**Validates: Requirements 4.2**

**Property 11: Next opponent selection**
*For any* tournament with a current winner and available teams, the system should select an available team as the next opponent
**Validates: Requirements 4.3**

**Property 12: Tournament state persistence**
*For any* tournament that is ended early, the current state including matches played and team statuses should be preserved
**Validates: Requirements 4.5**

**Property 13: Score update consistency**
*For any* match in progress, incrementing a team's score should increase their score by exactly one and trigger win condition checking
**Validates: Requirements 5.1, 5.2**

**Property 14: Match result recording**
*For any* completed match, the final score and match duration should be accurately stored and retrievable
**Validates: Requirements 5.5**

**Property 15: Spanish language consistency**
*For any* user interface element, all displayed text should be in Spanish using appropriate Peruvian terminology and locale formatting
**Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**

**Property 16: Tailwind CSS utility usage**
*For any* component template, styling should primarily use Tailwind utility classes with custom SCSS used only for complex styling that cannot be achieved with utilities
**Validates: Requirements 11.1, 11.3**

**Property 17: Responsive design consistency**
*For any* user interface element, it should adapt appropriately across different screen sizes using Tailwind's responsive prefixes
**Validates: Requirements 11.2**

**Property 18: Local storage persistence**
*For any* application data, storing it in localStorage and retrieving it should return equivalent data
**Validates: Requirements 8.4**

## Development Standards

### TypeScript and Angular Best Practices

The application will strictly follow modern Angular and TypeScript development standards:

**TypeScript Standards:**
- Use strict type checking throughout the codebase
- Prefer type inference when types are obvious
- Avoid `any` type; use `unknown` when type is uncertain
- Implement proper typing for all interfaces and function signatures

**Angular Component Standards:**
- All components must be standalone (no NgModules)
- Use `ChangeDetectionStrategy.OnPush` for all components
- Implement signal-based state management with `signal()` and `computed()`
- Use `input()` and `output()` functions instead of decorators
- Avoid `@HostBinding` and `@HostListener`; use `host` object in decorators

**Template Standards:**
- Use native control flow (`@if`, `@for`, `@switch`) instead of structural directives
- Apply Tailwind utility classes directly in templates for styling
- Combine Material components with Tailwind utilities (e.g., `<mat-card class="p-4 shadow-lg rounded-lg">`)
- Use Tailwind responsive prefixes for adaptive layouts
- Keep templates simple and avoid complex logic
- Use async pipe for observables

**Service Standards:**
- Use `inject()` function instead of constructor injection
- Design services around single responsibility principle
- Use `providedIn: 'root'` for singleton services
- Implement dedicated API services for HTTP requests
- Business logic services should inject API services for data operations

**Import Formatting:**
- When importing more than 3 components or libraries, format vertically:
```typescript
imports: [
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  PlayerComponent,
  TeamComponent
],
```

### Component Reuse and Styling Strategy

- Prioritize reusing existing buttons and UI components
- Maintain consistent palette using Tailwind's color system and design tokens
- Create shared components in the `shared/components` directory with Tailwind styling
- Document reusable component APIs and Tailwind class patterns
- Establish design system using Tailwind configuration for consistent spacing, colors, and typography
- Use Tailwind's utility classes for responsive design across all screen sizes

## Error Handling

### Input Validation Errors
- **Invalid Player Statistics**: Reject statistics outside 1-10 range
- **Invalid Team Configuration**: Prevent teams with insufficient position coverage
- **Invalid Match Duration**: Reject durations outside 10-60 minute range
- **Invalid Team Sizes**: Prevent creation of teams outside 4-8 player range

### Runtime Errors
- **Storage Failures**: Handle localStorage quota exceeded or access denied
- **Data Corruption**: Validate data integrity on application startup
- **Concurrent Modifications**: Handle multiple browser tabs modifying same data

### User Experience Errors
- **Empty Player Lists**: Provide guidance when no players are available for team creation
- **Insufficient Players**: Prevent tournament creation with too few players
- **Match State Conflicts**: Handle attempts to modify completed matches

## Testing Strategy

### Dual Testing Approach

The application will use both unit testing and property-based testing to ensure comprehensive coverage:

**Unit Testing**:
- Specific examples demonstrating correct behavior
- Edge cases like empty inputs, boundary values, and error conditions
- Integration points between Angular components and services
- Material Design component interactions

**Property-Based Testing**:
- Universal properties that should hold across all valid inputs
- Uses QuickCheck-style testing with fast-check library for TypeScript
- Each property-based test runs a minimum of 100 iterations
- Tests are tagged with comments referencing design document properties

### Testing Framework Configuration

- **Unit Tests**: Jasmine and Karma (Angular defaults)
- **Property-Based Tests**: fast-check library for TypeScript
- **Component Tests**: Angular Testing Utilities with Material Design test harnesses
- **E2E Tests**: Cypress for full user workflow validation

### Property-Based Test Requirements

Each property-based test must:
- Run minimum 100 iterations with randomly generated inputs
- Include comment tag: `**Feature: soccer-team-manager, Property {number}: {property_text}**`
- Generate realistic test data that respects domain constraints
- Validate the specific correctness property from this design document

### Test Data Generation Strategy

- **Player Generation**: Random statistics (1-10), random position combinations, varied ages
- **Team Generation**: Balanced and unbalanced team configurations
- **Match Generation**: Various score combinations, different durations
- **Tournament Generation**: Different team counts, various progression states

## Performance Considerations

### Client-Side Optimization
- **Lazy Loading**: Load tournament and match modules on demand
- **Virtual Scrolling**: Handle large player lists efficiently
- **Change Detection**: Use OnPush strategy for performance-critical components
- **Local Storage**: Implement efficient serialization/deserialization

### Algorithm Complexity
- **Team Balancing**: O(n log n) sorting-based algorithm for player distribution
- **Tournament Progression**: O(1) next opponent selection using queue-based approach
- **Statistics Calculation**: O(1) cached calculations with invalidation on data changes

## Security Considerations

### Client-Side Security
- **Input Sanitization**: Validate all user inputs before processing
- **XSS Prevention**: Use Angular's built-in sanitization for dynamic content
- **Data Validation**: Implement schema validation for localStorage data
- **Error Information**: Avoid exposing sensitive information in error messages

### Data Privacy
- **Local Storage Only**: No data transmitted to external servers
- **Data Retention**: Implement user-controlled data clearing functionality
- **Browser Security**: Rely on browser's localStorage security model