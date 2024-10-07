import React from "react"

/**
 * Conditionally renders its children based on a boolean condition.
 *
 * @param {boolean} when - The condition to evaluate.
 * 
 * Example usage:
 * <Show when={isVisible}>
 *   <div>This content is visible when `isVisible` is true</div>
 * </Show>
 */


const Show: React.FC<{ when: boolean, children:React.ReactNode }> = ({when, children = null}):React.ReactNode => 
{
  return when ? <React.Fragment>{children}</React.Fragment> : null;
}

export default Show;