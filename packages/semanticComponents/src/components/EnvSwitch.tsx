import React from "react"

const EnvSwitch: React.FC<{dev: React.ReactNode, hml: React.ReactNode, prod: React.ReactNode}> = ({dev, hml, prod}) => {
  const environment = process.env.NODE_ENV;
  switch(environment) {
    case "dev": return <React.Fragment>{dev}</React.Fragment>;
    case "hml": return <React.Fragment>{hml}</React.Fragment>;
    case "prod": return <React.Fragment>{prod}</React.Fragment>;
    default: return null;
  }
}

export default EnvSwitch;