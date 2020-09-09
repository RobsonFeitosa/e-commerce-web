import React from 'react';

import { Container, Title } from './styles';

const SpecialCall: React.FC = () => {
  return  (
    <Container>
      <div>
        <Title>
          <span>Pequenas mudanças</span>
          <strong>Grande diferença</strong>
        </Title>

        <div className="lineSeparator"></div>

        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo.</p>
      </div>
    </Container>
  )
}

export default SpecialCall;
