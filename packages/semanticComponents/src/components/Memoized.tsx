import React from "react";

/**
 * A component that memoizes its children, rendering them only when the provided dependencies change.
 * Similar to React's `useMemo` but used as a component to optimize rendering.
 *
 * @param {Array<any>} deps - The list of dependencies that will trigger a re-render when changed.
 * @param {React.ReactNode} children - The components to be memoized.
 * 
 * Example usage:
 * <Memoized deps={[data]}>
 *   <ExpensiveComponent data={data} />
 * </Memoized>
 * 
 * In this example, `ExpensiveComponent` will only re-render if `data` changes.
 */


interface MemoizedProps {
  deps?: React.DependencyList;
}

const Memoized: React.FC<React.PropsWithChildren<MemoizedProps>> = React.memo(
  ({ deps, children }) => {
    return children;
  },
  (prevProps, nextProps) => {
    if (!prevProps.deps || !nextProps.deps) return false; 
    if (prevProps.deps.length !== nextProps.deps.length) return false; 

    return prevProps.deps.every((dep, index) => dep === nextProps.deps![index]);
  }
);

export default Memoized;
