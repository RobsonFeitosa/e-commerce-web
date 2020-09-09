import React from 'react';

import { Container, HeadOffer, FooterOff, Timer } from './styles';

import imgTemp from '../../../assets/temp/Bg1-2.png';

const Offer: React.FC = () => {
  return (
    <Container>

      <HeadOffer>
        <h2>OFERTA DA SEMANA</h2>
        <p>Sofá 3 Lugares Esquerdo Living com Chaise Pé Palito Linho Cotton Cru</p>
        <Timer>
          <div>
            <span>Dias</span>
            <div>4</div>
          </div>
          <div>
            <span>Horas</span>
            <div>23</div>
          </div>
          <div>
            <span>Minutos</span>
            <div>12</div>
          </div>
          <div>
            <span>Segundos</span>
            <div>45</div>
          </div>
        </Timer>
      </HeadOffer>
      <FooterOff>
        <div className="price">
            <span className="oldPrice">R$ 2.699,00</span>
            <span className="newPrice">R$ 1.119,00</span>
        </div>
        <img src={imgTemp} alt="Produto"/>
      </FooterOff>

    </Container>
  );
}

export default Offer;
