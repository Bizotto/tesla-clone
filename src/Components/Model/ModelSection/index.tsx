import React, { ReactNode, useEffect, useRef } from 'react';
import useModel from '../UseModel';

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
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, []);
  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};
