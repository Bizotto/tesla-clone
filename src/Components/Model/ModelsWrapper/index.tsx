import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}
export const ModelsWrapper = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
