import React from 'react';

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

const If: React.FC<IfProps> = ({ condition, children }): React.ReactNode => {
  return condition ? <>{children}</> : null;
};

export default If;