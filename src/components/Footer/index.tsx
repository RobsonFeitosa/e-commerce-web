import React from 'react';
import {
  FaPaperPlane,
  FaFacebookSquare,
  FaInstagram,
  FaYoutubeSquare,
  FaCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

import {
  Container,
  FooterUp,
  FooterContent,
  FooterCredits,
  Newsletter,
  Followus,
} from './styles';

import imgLogo from '../../assets/logo_sem_fundo.svg';
import Payment from '../../assets/pay.png';
import simbolLimon from '../../assets/simbolLimon.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <FooterUp>
          <div>
            <a href="/" className="logoFooter">
              <img src={imgLogo} alt="Compre Di Casa" />
            </a>

            <nav>
              <ul>
                <li>
                  <a href="/">TODOS OS PRODUTOS</a>
                </li>
                <li>
                  <a href="/">MÓVEIS</a>
                </li>
                <li>
                  <a href="/">LAZER</a>
                </li>
                <li>
                  <a href="/">ELETRÔNICOS</a>
                </li>
                <li>
                  <a href="/">FERRAMENTAS</a>
                </li>
                <li>
                  <a href="/">INDÚSTRIA</a>
                </li>
              </ul>
            </nav>
          </div>
          <img className="paymentform" src={Payment} alt="Pagamentos" />
        </FooterUp>

        <FooterContent>
          <div className="myaccount">
            <span>Minha Conta</span>
            <ul>
              <li>
                <a href="/">
                  <FaCircle />
                  Meus pedidos
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Meus recibos de crédito
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Meu endereço
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Minhas informações pessoais
                </a>
              </li>
            </ul>
          </div>
          <div className="order">
            <span>PEDIDOS</span>
            <ul>
              <li>
                <a href="/">
                  <FaCircle />
                  Opções de pagamento
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Envio e entrega
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Devoluções
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Remessa
                </a>
              </li>
            </ul>
          </div>

          <div className="infor">
            <span>INFORMAÇÃO</span>
            <ul>
              <li>
                <a href="/">
                  <FaCircle />
                  Especiais
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Novos Produtos
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Mais vendidos
                </a>
              </li>
              <li>
                <a href="/">
                  <FaCircle />
                  Nossas lojas
                </a>
              </li>
            </ul>
          </div>

          <div className="contact">
            <span>CONTATE - NOS</span>
            <ul>
              <li>
                <FaMapMarkerAlt />
                504 Norte, alameda 4, lote 23, Plano Diretor Norte, CEP
                77020-454
              </li>
              <li>
                <FaPhoneAlt /> +55 (63) 9 9999 - 9999 +55 (63) 9 9999 - 9999
              </li>
              <li>
                <FaEnvelope /> contato@compredicasa.com.br
              </li>
            </ul>
          </div>
        </FooterContent>

        <div className="footerutils">
          <Newsletter>
            <span>Newslleter</span>
            <form>
              <input name="newslleter" placeholder="Digite seu e-mail" />
              <button type="submit">
                <FaPaperPlane size={22} />
              </button>
            </form>
          </Newsletter>

          <Followus>
            <span>Siga-nos</span>

            <ul>
              <li>
                <a href="/facebook" className="facebook">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="/instagram" className="instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/youtube" className="youtube">
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
          </Followus>
        </div>
      </div>
      <FooterCredits>
        <span>© 2020 - Todos os direitos reservados a COMPREDICASA.COM.BR</span>

        <a href="/">
          <img src={simbolLimon} alt="Limonada Web Soluções" />
        </a>
      </FooterCredits>
    </Container>
  );
};

export default Footer;
