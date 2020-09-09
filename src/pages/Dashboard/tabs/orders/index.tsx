import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Container, ListOrders, ItemOrder, Order, Description } from './styles';

const orders: React.FC = () => {
  return (
    <>
      <Container>
        <ListOrders>
          <ItemOrder type="done">
            <div className="header">
              <span>
                <a href="/">
                  <FaChevronDown size={16} />
                  Pedido entregue
                </a>
              </span>
              <span>
                Entregue dia <strong> 02/Agosto</strong>
              </span>
            </div>
            <Order>
              <img
                src="https://static.carrefour.com.br/medias/sys_master/images/images/hea/h9a/h00/h00/13371068448798.jpg"
                alt=""
              />
              <Description>
                <span className="title">
                  Cooktop A Gás GLP Venax Black Auttomático 4 Bocas Preto Bivolt
                </span>
                <p>Lorem Ipsum é simplesmente uma simulação...</p>
                <div>
                  <span>1 unidade - </span>
                  <span>
                    <strong> R$ 550,00</strong>
                  </span>
                </div>
              </Description>
            </Order>
          </ItemOrder>
          <ItemOrder type="cancel">
            <div className="header">
              <span>
                <a href="/">
                  <FaChevronDown size={16} />
                  Pedido Cancelado
                </a>
              </span>
            </div>
            <Order>
              <img
                src="https://static.carrefour.com.br/medias/sys_master/images/images/hea/h9a/h00/h00/13371068448798.jpg"
                alt=""
              />
              <Description>
                <span className="title">
                  Cooktop A Gás GLP Venax Black Auttomático 4 Bocas Preto Bivolt
                </span>
                <p>Lorem Ipsum é simplesmente uma simulação...</p>
                <div>
                  <span>1 unidade - </span>
                  <span>
                    <strong> R$ 550,00</strong>
                  </span>
                </div>
              </Description>
            </Order>
          </ItemOrder>
          <ItemOrder type="onroute">
            <div className="header">
              <span>
                <a href="/">
                  <FaChevronDown size={16} />
                  Pedido em rota de entrega
                </a>
              </span>
              <span>
                Chegará dia <strong> 02/Agosto</strong>
              </span>
            </div>
            <Order>
              <img
                src="https://static.carrefour.com.br/medias/sys_master/images/images/hea/h9a/h00/h00/13371068448798.jpg"
                alt=""
              />
              <Description>
                <span className="title">
                  Cooktop A Gás GLP Venax Black Auttomático 4 Bocas Preto Bivolt
                </span>
                <p>Lorem Ipsum é simplesmente uma simulação...</p>
                <div>
                  <span>1 unidade - </span>
                  <span>
                    <strong> R$ 550,00</strong>
                  </span>
                </div>
              </Description>
            </Order>
          </ItemOrder>
        </ListOrders>
      </Container>
    </>
  );
};

export default orders;
