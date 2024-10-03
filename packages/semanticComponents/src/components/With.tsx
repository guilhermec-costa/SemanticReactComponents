import React from "react"

interface WithProps<T> {
  value: T,
  children: any;
}

const With = <T,>({value, children}: WithProps<T>): React.ReactNode => {
  const isChildrenAFn = typeof children == "function";
  return <React.Fragment>
    return <>{isChildrenAFn ? children(value) : children}</>;
  </React.Fragment>
}

export default With;