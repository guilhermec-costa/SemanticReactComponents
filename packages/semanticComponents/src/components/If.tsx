import React from 'react';

interface IfProps {
  condition: boolean;
  render: React.ReactNode;
}

const If: React.FC<IfProps> = ({ condition, render}): React.ReactNode => {
  return condition ? <>{render}</> : null;
};

export default If;