import React from "react"

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