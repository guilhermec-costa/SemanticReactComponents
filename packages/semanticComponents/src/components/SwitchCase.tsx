import React from "react"
import { markAsUntransferable } from "worker_threads";

interface CaseProps {
  value?: any;
  default?: boolean;
  children: React.ReactNode;
}

interface SwitchProps {
  expression: any;
  children: React.ReactElement<CaseProps>[] | React.ReactElement<CaseProps>;
}

const Switch: React.FC<SwitchProps> = ({ expression, children }): React.ReactNode => {
  let matchedChild: React.ReactElement<CaseProps> | null  = null;
  React.Children.forEach(children, (child) => {
    if(!matchedChild && React.isValidElement(child)) {
      if(child.props.value === expression || child.props.default)
        matchedChild = child;
    }
  })

  return matchedChild;
}

const Case: React.FC<CaseProps> = ({ value, default: boolean, children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

export {
  Case,
  Switch
}