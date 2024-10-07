import React from 'react';

/**
 * A conditional rendering component, similar to an `if` statement in JavaScript.
 *
 * @param {boolean} condition - The condition to evaluate.
 * 
 * Example usage:
 * <If condition={isLoggedIn}>
 *   <div>Welcome back!</div>
 * </If>
 */

interface IfProps {
  condition: boolean;
  render: React.ReactNode;
}

const If: React.FC<IfProps> = ({ condition, render}): React.ReactNode => {
  return condition ? <>{render}</> : null;
};

export default If;