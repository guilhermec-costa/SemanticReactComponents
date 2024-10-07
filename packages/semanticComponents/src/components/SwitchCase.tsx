import React from "react"

/**
 * A component that mimics the functionality of a switch-case statement.
 * It renders the child component that matches the provided case value.
 *
 * @param {any} expression - The value to match against each case.
 * @param {React.ReactNode} children - An array of `Case` components. Each `Case` should have a `value` prop that matches the value.
 * 
 * Example usage:
 * <SwitchCase value={status}>
 *   <Case value="loading">
 *     <div>Loading...</div>
 *   </Case>
 *   <Case value="error">
 *     <div>Error occurred!</div>
 *   </Case>
 *   <Case value="success">
 *     <div>Data loaded successfully!</div>
 *   </Case>
 * </SwitchCase>
 */

interface CaseProps {
  value?: any;
  default?: boolean;
}
type CaseElement = React.ReactElement<CaseProps>

interface SwitchProps {
  expression: any;
  children: CaseElement[] | CaseElement;
}

const Switch: React.FC<SwitchProps> = ({ expression, children }): React.ReactNode => {
  let matchedChild: CaseElement | null  = null;
  React.Children.forEach(children, (child) => {
    if(!matchedChild && React.isValidElement(child)) {
      if(child.props.value === expression || child.props.default)
        matchedChild = child;
    }
  })

  return matchedChild;
}

const Case: React.FC<React.PropsWithChildren<CaseProps>> = ({ value, default: boolean, children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

export {
  Case,
  Switch
}