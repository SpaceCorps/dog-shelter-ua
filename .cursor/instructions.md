# Development Instructions

For using shadcn, you have access to Shadcn MCP server

## Technology Stack

- **UI Framework**: React (latest)
- **Styling**: Tailwind CSS 4 (latest)
- **Component Library**: shadcn/ui (latest version only)
- **TypeScript**: Enabled for type safety

## Component Structure

### Folder Organization

All components should follow a structured folder approach with separate files for different concerns:

```
src/components/
├── ComponentName/
│   ├── index.ts          # Main export file
│   ├── ComponentName.tsx # React component logic
│   ├── ComponentName.ts  # TypeScript types/interfaces
│   └── ComponentName.css # css
```

### File Responsibilities

#### `index.ts`

- Main export file for the component
- Should export the named component and any related types
- **CRITICAL**: Use named exports only, not default exports
- Example:

```typescript
export { ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName.ts";
```

#### `ComponentName.tsx`

- Contains the React component implementation
- Imports types from the corresponding `.ts` file
- Focuses on component logic and JSX structure
- **CRITICAL**: Must use named exports only, never default exports

#### `ComponentName.ts`

- Contains TypeScript interfaces, types, and enums
- Component props definitions
- Any utility types related to the component
- Business logic functions (if any)

#### `ComponentName.html` (Optional)

- Used for complex HTML structures or templates
- Can be referenced in the TSX file if needed
- Useful for maintaining separation of concerns

### Component Guidelines

1. **Use Latest shadcn/ui Only**: Always use the most recent version of shadcn/ui components
2. **Tailwind CSS 4**: Utilize the latest Tailwind CSS 4 features and syntax
3. **Type Safety**: All components must be fully typed with TypeScript
4. **Consistent Naming**: Use PascalCase for component names and folders
5. **Single Responsibility**: Each file should have a clear, single purpose
6. **Export Pattern**: Always use the index.ts pattern for clean imports
7. **CRITICAL: Named Exports Only**: Always use named exports instead of default exports to avoid TypeScript compilation issues

### Example Implementation

```typescript
// components/Button/Button.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// components/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.ts';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// CRITICAL: Use named export only
export { Button };

// components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button.ts';
```

### Import Usage

With this structure, components can be imported cleanly using named imports:

```typescript
import { Button, ButtonProps } from "@/components/Button";
```

**CRITICAL**: Always use named imports, never default imports to avoid TypeScript compilation issues.

## Standards to Follow

- Always use the latest versions of specified technologies
- Maintain consistent file structure across all components
- Ensure full TypeScript coverage
- Follow React best practices and hooks patterns
- Use Tailwind CSS 4 utility classes effectively
- Integrate shadcn/ui components as the foundation for custom components
- **CRITICAL**: Always use named exports and named imports - never use default exports/imports
