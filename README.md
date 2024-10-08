# Semantic React UI Components

A collection of semantic and utility components for React applications. This package provides reusable components and hooks to simplify conditional rendering, event handling, and other common UI patterns.

## Installation

To install the package, run:
```bash
npm install semantic-react-ui-components
```

For TypeScript projects, also install the type definitions:

```bash
npm install --save-dev @types/semantic-react-ui-components
```

## Components
### If
Conditionally renders children based on a boolean expression.

```jsx
import { If } from 'semantic-react-ui-components';

<If condition={true}>
  <p>This will be rendered if the condition is true.</p>
</If>
```