import React from "react"

/**
 * Passes additional props to the wrapped children.
 *
 * @param {object} props - The additional props to pass to the children.
 * 
 * Example usage:
 * <With props={{ className: 'my-class' }}>
 *   <div>Content with extra props</div>
 * </With>
 */

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