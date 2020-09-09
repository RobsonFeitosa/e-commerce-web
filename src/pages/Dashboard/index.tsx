import React, { useState, useCallback } from 'react';
import {
  FaCube,
  FaUserCog,
  FaMapMarkedAlt,
  FaHeart,
  FaExchangeAlt,
  FaComments,
  FaPhoneAlt,
  FaSignOutAlt,
} from 'react-icons/fa';

import TabManager from '../../components/TabManager';
import { useAuth } from '../../hooks/auth';

import Orders from './tabs/orders';
import Register from './tabs/register';
import Address from './tabs/address';
import Favorite from './tabs/favorite';

import {
  Container,
  HeaderAccount,
  Content,
  LeftSideBar,
  RightSiderBar,
  NavAccount,
  OptNavHelper,
} from './styles';

const TABS = [
  { nav: 'Pedidos', icon: <FaCube />, tab: 'Orders', value: 1 },
  { nav: 'Cadastro', icon: <FaUserCog />, tab: 'Register', value: 2 },
  { nav: 'Endereço', icon: <FaMapMarkedAlt />, tab: 'Address', value: 3 },
  { nav: 'Favoritos', icon: <FaHeart />, tab: 'Favorite', value: 4 },
];

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const [activeTab, handleTab] = useState(1);

  const renderSwitch = useCallback((param) => {
    switch (param) {
      case 1:
        return <Orders />;
      case 2:
        return <Register />;
      case 3:
        return <Address />;
      case 4:
        return <Favorite />;
      default:
        return <Orders />;
    }
  }, []);

  return (
    <>
      <Container className="container">
        <HeaderAccount>
          <h2>Minha Conta</h2>
        </HeaderAccount>

        <Content>
          <LeftSideBar>
            <NavAccount>
              <ul>
                <TabManager
                  tabs={TABS}
                  activeTab={activeTab}
                  handleTab={handleTab}
                />
                <li>
                  <button type="button" onClick={signOut}>
                    <FaSignOutAlt /> Sair
                  </button>
                </li>
              </ul>
            </NavAccount>

            <OptNavHelper>
              <a href="/">
                <FaExchangeAlt size={24} />
                <span>Trocar ou devolver</span>
              </a>
              <a href="/">
                <FaComments size={26} />
                <span>Preciso de ajuda</span>
              </a>
              <a href="/">
                <FaPhoneAlt size={22} />
                <span>Fale com a gente</span>
              </a>
            </OptNavHelper>
          </LeftSideBar>

          <div className="lineVertical" />

          <RightSiderBar className="">
            <div className="tab-content">{renderSwitch(activeTab)}</div>
          </RightSiderBar>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
