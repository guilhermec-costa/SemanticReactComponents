import React from "react"

const Show: React.FC<{ when: boolean, children:React.ReactNode }> = ({when, children = null}):React.ReactNode => 
{
  return when ? <React.Fragment>{children}</React.Fragment> : null;
}

export default Show;