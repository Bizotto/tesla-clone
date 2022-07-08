import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model one',
            'Model two',
            'Model three',
            'Model four',
            'Model five',
            'Model six',
            'Model seven',
          ].map((modelName) => (
            <ModelSection
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order online for delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
