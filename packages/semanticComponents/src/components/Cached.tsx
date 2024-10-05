import React from "react";

interface CachedProps {
  deps?: React.DependencyList;
}

const Cached: React.FC<React.PropsWithChildren<CachedProps>> = React.memo(
  ({ deps, children }) => {
    console.log("aqui")
    return children;
  },
  (prevProps, nextProps) => {
    if (!prevProps.deps || !nextProps.deps) return false; 
    if (prevProps.deps.length !== nextProps.deps.length) return false; 

    return prevProps.deps.every((dep, index) => dep === nextProps.deps![index]);
  }
);

export default Cached;
