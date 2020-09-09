import React from 'react';

import Slider from '../../components/Home/Slider';
import MostPopular from '../../components/Home/MostPopular';
import SpecialProduct from '../../components/Home/SpecialProduct';
import Offer from '../../components/Home/Offer';
import SpecialCall from '../../components/Home/SpecialCall';
import GalleryProduct from '../../components/Home/GalleryProduct';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Slider />
      <MostPopular />
      <div className="container">
        <div className="guild-row r2">
          <SpecialProduct />
          <Offer />
        </div>
      </div>
      {/* <SpecialCall />
      <GalleryProduct /> */}
    </Container>
  );
};

export default Home;
