# Soccer Team Manager - Design System

## Overview

This document outlines the design system for the Soccer Team Manager application, built with **Tailwind CSS v3.4** and Angular Material components.

## Installation and Configuration

The project uses:
- **Tailwind CSS v3.4.19** for utility-first styling
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility
- **Angular Material** for component structure

### Configuration Files
- `tailwind.config.js` - Tailwind configuration with custom theme
- `postcss.config.js` - PostCSS configuration for Angular integration
- `src/styles.scss` - Global styles with Tailwind directives and Material theme

## Color Palette

### Soccer Theme Colors
- `soccer-primary`: #2E7D32 (Green for soccer field)
- `soccer-secondary`: #FFA726 (Orange for energy)
- `soccer-accent`: #1976D2 (Blue for trust)
- `soccer-field`: #4CAF50 (Grass green)
- `soccer-ball`: #FFFFFF (White)
- `soccer-warning`: #FF5722 (Red for warnings)
- `soccer-success`: #4CAF50 (Success green)
- `soccer-info`: #2196F3 (Info blue)
- `soccer-light`: #F5F5F5 (Light gray)
- `soccer-dark`: #212121 (Dark gray)

### Material Design Colors
- `material-primary`: #1976D2
- `material-secondary`: #FFA726
- `material-surface`: #FFFFFF
- `material-background`: #FAFAFA
- `material-error`: #F44336

## Typography

### Font Families
- `font-soccer`: Roboto, Helvetica Neue, sans-serif
- `font-display`: Roboto, sans-serif
- `font-body`: Roboto, sans-serif

### Font Sizes
- `text-xs`: 12px (0.75rem)
- `text-sm`: 14px (0.875rem)
- `text-base`: 16px (1rem)
- `text-lg`: 18px (1.125rem)
- `text-xl`: 20px (1.25rem)
- `text-2xl`: 24px (1.5rem)
- `text-3xl`: 30px (1.875rem)
- `text-4xl`: 36px (2.25rem)
- `text-5xl`: 48px (3rem)
- `text-6xl`: 60px (3.75rem)

## Spacing

### Custom Spacing Scale
- `xs`: 8px (0.5rem)
- `sm`: 12px (0.75rem)
- `md`: 16px (1rem)
- `lg`: 24px (1.5rem)
- `xl`: 32px (2rem)
- `2xl`: 48px (3rem)
- `3xl`: 64px (4rem)
- `18`: 72px (4.5rem)
- `22`: 88px (5.5rem)
- `88`: 352px (22rem)
- `128`: 512px (32rem)

## Responsive Breakpoints

- `xs`: 600px (Extra small devices)
- `sm`: 960px (Small devices)
- `md`: 1280px (Medium devices)
- `lg`: 1920px (Large devices)
- `xl`: 2560px (Extra large devices)

## Shadows (Material Design)

- `shadow-material-1`: Subtle shadow for cards
- `shadow-material-2`: Standard shadow for elevated elements
- `shadow-material-3`: Prominent shadow for modals
- `shadow-material-4`: Deep shadow for dialogs
- `shadow-material-5`: Maximum shadow for floating elements

## Border Radius

- `rounded-material`: 4px (Standard Material Design)
- `rounded-material-lg`: 8px (Large Material Design)
- `rounded-material-xl`: 12px (Extra large Material Design)

## Custom Component Classes

### Soccer-Themed Components
- `.soccer-card`: White card with Material shadow and padding
- `.soccer-button-primary`: Primary soccer-themed button
- `.soccer-button-secondary`: Secondary soccer-themed button
- `.soccer-field-bg`: Gradient background mimicking soccer field
- `.soccer-text-primary`: Primary text color with medium weight
- `.soccer-border`: Primary border styling

### Layout Utilities
- `.soccer-grid`: Responsive grid with auto-fit columns (min 280px)
- `.soccer-grid-sm`: Responsive grid with smaller columns (min 200px)

### Animation Utilities
- `.soccer-fade-in`: Pulse animation for loading states
- `.soccer-hover-lift`: Hover effect with scale transform

## Usage Guidelines

### Combining Tailwind with Angular Material

1. **Use Material components for structure**: buttons, cards, tables, dialogs
2. **Use Tailwind for styling**: spacing, colors, layout, responsive design
3. **Apply Tailwind classes to Material components**:
   ```html
   <mat-card class="p-lg shadow-material-2 rounded-material-lg">
     <mat-card-content class="space-y-md">
       <!-- Content -->
     </mat-card-content>
   </mat-card>
   ```

### Responsive Design

Use Tailwind's responsive prefixes with our custom breakpoints:
```html
<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <!-- Responsive grid content -->
</div>
```

### Color Usage

- Use soccer theme colors for branding and primary actions
- Use material colors for standard UI elements
- Maintain sufficient contrast for accessibility

### Spacing Consistency

- Use the custom spacing scale for consistent layouts
- Prefer semantic spacing names (xs, sm, md, lg, xl) over numeric values
- Use padding and margin utilities consistently

## Examples

### Player Card Component
```html
<mat-card class="soccer-card soccer-hover-lift">
  <mat-card-header class="pb-md">
    <mat-card-title class="soccer-text-primary">{{ player.name }}</mat-card-title>
  </mat-card-header>
  <mat-card-content class="space-y-sm">
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-600">Strength:</span>
      <span class="font-medium">{{ player.strength }}/10</span>
    </div>
  </mat-card-content>
</mat-card>
```

### Team Creation Form
```html
<form class="space-y-lg">
  <mat-form-field class="w-full">
    <mat-label>Team Name</mat-label>
    <input matInput class="focus:ring-soccer-primary">
  </mat-form-field>
  
  <div class="flex gap-md">
    <button mat-raised-button class="soccer-button-primary flex-1">
      Create Team
    </button>
    <button mat-button class="flex-1">
      Cancel
    </button>
  </div>
</form>
```

### Tournament Bracket
```html
<div class="soccer-grid">
  <div class="soccer-card" *ngFor="let match of matches">
    <div class="flex justify-between items-center mb-md">
      <span class="soccer-text-primary font-medium">{{ match.team1.name }}</span>
      <span class="text-2xl font-bold">{{ match.score.team1Goals }}</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="soccer-text-primary font-medium">{{ match.team2.name }}</span>
      <span class="text-2xl font-bold">{{ match.score.team2Goals }}</span>
    </div>
  </div>
</div>
```
