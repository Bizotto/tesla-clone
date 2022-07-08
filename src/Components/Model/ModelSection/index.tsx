import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}
export const ModelSection = ({
  modelName,
  overlayNode,
  children,
  ...props
}: Props) => {
  return <Container {...props}>{children}</Container>;
};
