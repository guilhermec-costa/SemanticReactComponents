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

### `Delayed`

The `Delayed` component is used to delay the rendering of its children for a specified amount of time in milliseconds. This can be useful for creating delayed effects in animations or content loading.

#### Usage

```tsx
import Delayed from 'semantic-components/Delayed';

const Example = () => (
  <Delayed delay={1000}>
    <div>This content will appear after 1 second</div>
  </Delayed>
);
```

#### Properties

| Property | Type   | Description                                        |
|----------|--------|----------------------------------------------------|
| `delay`  | number | The delay in milliseconds before rendering children.|

#### Example

```tsx
<Delayed delay={2000}>
  <p>This paragraph will appear after 2 seconds</p>
</Delayed>
```

### `Desktop`

The `Desktop` component conditionally renders its children when the screen width is above a specified value, typically for desktop screens.

#### Usage

```tsx
import Desktop from 'semantic-components/Desktop';

const Example = () => (
  <Desktop baseWidth={1024}>
    <div>This content will only appear on desktop</div>
  </Desktop>
);
```

#### Properties

| Property    | Type   | Description                                             |
|-------------|--------|---------------------------------------------------------|
| `baseWidth` | number | Minimum screen width for rendering children (optional). |

#### Example

```tsx
<Desktop baseWidth={1200}>
  <p>This will only appear on large desktop screens</p>
</Desktop>
```
### `Memoized`

The `Memoized` component memoizes its children, rendering them only when the provided dependencies change. It works similarly to React's `useMemo`, but as a component to optimize rendering.

#### Usage

```tsx
import Memoized from 'semantic-components/Memoized';

const Example = () => (
  <Memoized deps={[data]}>
    <ExpensiveComponent data={data} />
  </Memoized>
);
```

#### Properties

| Property | Type                     | Description                                          |
|----------|--------------------------|------------------------------------------------------|
| `deps`   | React.DependencyList     | List of dependencies that trigger a re-render when changed (optional). |

#### Example

```tsx
<Memoized deps={[data]}>
  <p>This component will only re-render if data changes</p>
</Memoized>
```

#### Behavior

- The component only re-renders its children when one of the dependencies in the `deps` array changes.
- Utilizes `React.memo` for performance optimization by preventing unnecessary renders.

### `Switch`

The `Switch` component mimics the functionality of a switch-case statement, rendering the child component that matches the provided case value.

#### Usage

```tsx
import { Switch, Case } from 'semantic-components/SwitchCase';

const Example = () => (
  <Switch expression={status}>
    <Case value="loading">
      <div>Loading...</div>
    </Case>
    <Case value="error">
      <div>Error occurred!</div>
    </Case>
    <Case value="success">
      <div>Data loaded successfully!</div>
    </Case>
  </Switch>
);
```

#### Properties

| Property     | Type          | Description                                         |
|--------------|---------------|-----------------------------------------------------|
| `expression` | any           | The value to match against each `Case`.            |
| `children`   | CaseElement[] | An array of `Case` components to evaluate.         |

### `Case`

The `Case` component defines a case within the `Switch`.

#### Usage

```tsx
<Case value="exampleValue">
  <div>This content is displayed for "exampleValue"</div>
</Case>
```

#### Properties

| Property | Type    | Description                                             |
|----------|---------|---------------------------------------------------------|
| `value`  | any     | The value to match against the `expression` in `Switch`. |
| `default`| boolean | If true, this case will render when no other cases match (optional). |

#### Behavior

- The `Switch` component renders the first `Case` whose `value` matches the `expression`. 
- If no matches are found, nothing is rendered unless a `Case` with the `default` prop is provided.

### `Show`

The `Show` component conditionally renders its children based on a boolean condition.

#### Usage

```tsx
import Show from 'semantic-components/Show';

const Example = () => (
  <Show when={isVisible}>
    <div>This content is visible when `isVisible` is true</div>
  </Show>
);
```

#### Properties

| Property | Type    | Description                                   |
|----------|---------|-----------------------------------------------|
| `when`   | boolean | The condition to evaluate for rendering children.|

#### Example

```tsx
<Show when={true}>
  <p>This content is shown when the condition is true</p>
</Show>
```
