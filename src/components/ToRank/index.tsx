import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';

import { Container } from './styles';

const ToRank: React.FC = () => {
  return (
    <Container>
      <MdStar size={20} />
      <MdStar size={20} />
      <MdStar size={20} />
      <MdStar size={20} />
      <MdStarHalf size={20} />
    </Container>
  );
};

export default ToRank;
