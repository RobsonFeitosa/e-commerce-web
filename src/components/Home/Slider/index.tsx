import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { withRouter } from 'react-router-dom';

import { Container, Main } from './styles';

import Slide1 from '../../../assets/temp/slide-1.png';

const Slider: React.FC = () => {
  return (
    <Container>
      <AwesomeSlider>
        <div data-src={Slide1}>
          <Main>
            <div>
              <span>FINALMENTE COMEÇOU</span>
              <h2>VENDA DE TEMPORADA 2020</h2>
              <p>
                Linhas industriais e ferramentas para seu lazer com os melhores
                preços na temporada. Aproveite essa oportunidade!
              </p>

              <a href="/">VEJA MAIS</a>
            </div>
          </Main>
        </div>
      </AwesomeSlider>
    </Container>
  );
};

export default withRouter(Slider);
