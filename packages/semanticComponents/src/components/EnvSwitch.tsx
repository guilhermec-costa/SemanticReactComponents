import React from "react"

/**
 * Switches between different environment configurations (useful for multiple environments like dev, staging, prod).
 *
 * @param {string} env - The environment name to switch.
 * @param {React.ReactNode} children - The elements to render based on the current environment.
 * 
 * Example usage:
 * <EnvSwitch env="production">
 *   <div>This content appears in production</div>
 * </EnvSwitch>
 */

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