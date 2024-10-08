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

### `EnvSwitch`

The `EnvSwitch` component switches between different environment configurations, allowing you to render specific content based on the current environment (e.g., development, staging, production).

#### Usage

```tsx
import EnvSwitch from 'semantic-components/EnvSwitch';

const Example = () => (
  <EnvSwitch dev={<div>This content appears in development</div>} hml={<div>This content appears in staging</div>} prod={<div>This content appears in production</div>} />
);
```

#### Properties

| Property | Type          | Description                                             |
|----------|---------------|---------------------------------------------------------|
| `dev`    | React.ReactNode| Elements to render in the development environment.      |
| `hml`    | React.ReactNode| Elements to render in the staging environment.         |
| `prod`   | React.ReactNode| Elements to render in the production environment.      |

#### Behavior

- Renders the content based on the current environment specified by `process.env.NODE_ENV`.
- If the environment does not match any case, nothing is rendered.

### `useAsyncEffect`

The `useAsyncEffect` hook allows you to run asynchronous effects in a React functional component. It is an asynchronous variant of the standard `useEffect` hook.

#### Usage

```tsx
import useAsyncEffect from 'semantic-components/useAsyncEffect';

const Example = () => {
  useAsyncEffect(async () => {
    const data = await fetchData();
    console.log(data);

    // Optional cleanup function
    return () => {
      console.log('Cleanup logic here');
    };
  }, [/* dependencies */]);
  
  return <div>Check the console for fetched data.</div>;
};
```

#### Parameters

| Parameter | Type                 | Description                                                  |
|-----------|----------------------|--------------------------------------------------------------|
| `cb`      | () => Promise<void>  | The asynchronous callback to run. It can optionally return a cleanup function. |
| `deps`    | React.DependencyList  | An array of dependencies for the effect; the effect will run whenever these dependencies change. |

### `useElementSize`

The `useElementSize` hook provides a way to measure the size of a DOM element and automatically updates the size when the element is resized.

#### Usage

```tsx
import useElementSize from 'semantic-components/useElementSize';

const Example = () => {
  const [ref, { width, height }] = useElementSize<HTMLDivElement>();

  return (
    <div ref={ref} style={{ resize: 'both', overflow: 'auto' }}>
      <p>The size of this element is {width} x {height}</p>
    </div>
  );
};
```

#### Returns

- An array containing:
  1. A `RefObject` that should be assigned to the DOM element you want to measure.
  2. An object with `width` and `height` properties representing the current dimensions of the element.

#### Behavior

- Uses a `ResizeObserver` to monitor size changes and updates the dimensions accordingly.
- Initializes the dimensions to `{ width: 0, height: 0 }`.

### `useIdleDetection`

The `useIdleDetection` hook detects user inactivity within a specified timeout period. It returns a boolean indicating whether the user is considered idle.

#### Usage

```tsx
import useIdleDetection from 'semantic-components/useIdleDetection';

const Example = () => {
  const isIdle = useIdleDetection(30000); // 30 seconds timeout

  return (
    <div>
      {isIdle ? <p>You are idle</p> : <p>You are active</p>}
    </div>
  );
};
```

#### Parameters

| Parameter | Type   | Description                             |
|-----------|--------|-----------------------------------------|
| `timeout` | number | The duration (in milliseconds) after which the user is considered idle. Default is 30000 ms (30 seconds). |

#### Returns

- A boolean indicating whether the user is idle (`true` if idle, `false` if active).

#### Behavior

- Monitors specific user interactions: `mousemove`, `keydown`, `click`, and `scroll`.
- Resets the idle timer whenever a valid interaction occurs.
- Cleans up event listeners and timeout when the component unmounts or when the timeout changes.

### `useKeyCombo`

The `useKeyCombo` hook allows you to define and detect key combinations in your React application. When a defined combination of keys is pressed, a specified callback function is executed.

#### Usage

```tsx
import useKeyCombo from 'semantic-components/useKeyCombo';

const Example = () => {
  useKeyCombo([
    {
      keys: ['Control', 'C'],
      callback: () => console.log('Control + C pressed!'),
    },
    {
      keys: ['Control', 'V'],
      callback: () => console.log('Control + V pressed!'),
    },
  ]);

  return <div>Press key combinations!</div>;
};
```

#### Parameters

| Parameter | Type           | Description                                         |
|-----------|----------------|-----------------------------------------------------|
| `combos`  | `KeyCombo[]`   | An array of key combinations to listen for. Each `KeyCombo` contains: |
|           |                | - `keys`: An array of key names (strings).        |
|           |                | - `callback`: A function to be executed when the combination is pressed. |

#### Behavior

- Listens for `keydown` and `keyup` events on the document.
- Maintains a state of currently pressed keys.
- Executes the callback for each key combination when all specified keys are pressed.
- Cleans up event listeners when the component unmounts.

#### Notes

- Ensure that the keys specified in the `keys` array are valid key names recognized by the browser (e.g., "Enter", "Escape", "Control").

### `ScrollTo`

The `ScrollTo` component provides a smooth scrolling effect to a specified element when the button is clicked. It scrolls to the target element identified by the `targetId` prop.

#### Usage

```tsx
import ScrollTo from 'semantic-components/ScrollTo';

const Example = () => {
  return (
    <ScrollTo targetId="section1">
      <button>Scroll to Section 1</button>
    </ScrollTo>
  );
};
```

#### Props

| Prop       | Type               | Description                                                      |
|------------|--------------------|------------------------------------------------------------------|
| `targetId` | `string`           | The ID of the element to scroll to.                             |
| `children` | `React.ReactNode`  | The content to render inside the button.                        |

#### Behavior

- When the button is clicked, the component scrolls smoothly to the specified target element.
- Uses the native `scrollIntoView` method for smooth scrolling.

#### Notes

- Ensure that the target element exists in the DOM with the specified ID.