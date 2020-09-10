import React, { useCallback } from 'react';
import {
  FaEnvelope,
  FaTruck,
  FaPhoneAlt,
  FaWhatsapp,
  FaSearch,
  FaUserCircle,
  FaHeart,
} from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import logoImg from '../../assets/logo_fundo_azul.svg';

import CartFloatUp from '../CartFloatUp';
import FavoriteFloatUp from '../FavoriteFloatUp';

import Nav from './Nav';
import NavFloat from './Float';

import { Container, WrapperHead, HeadUp, HeadContent, HeadNav } from './styles';

const Header: React.FC = () => {
  const { customer, isAuthenticated } = useAuth();
  const { products } = useCart();

  const favoriteFloatUpDisplay = useCallback(() => {
    $('.favorite-float-head').toggleClass('act');
  }, []);

  const cartFloatUpDisplay = useCallback(() => {
    $('.cart-float-head').toggleClass('act');
  }, []);

  return (
    <Container>
      <WrapperHead>
        <HeadUp className="container">
          <div>
            <FaEnvelope size={20} />
            <span>contato@compredicasa.com.br</span>
          </div>
          <div>
            <FaTruck size={20} />
            <span>
              Entregamos para toda região de palmas e proximidades.
              <a href="/">saiba mais!</a>
            </span>
          </div>
          <div>
            <FaPhoneAlt size={20} />
            <span>+55 (63) 9 9999-9999</span>
          </div>
          <div className="whatsbox">
            <a href="https://api.whatsapp.com/send?phone=63992109255&text=Olá">
              <FaWhatsapp size={20} />
              <span>FALE AGORA</span>
            </a>
          </div>
        </HeadUp>

        <HeadContent>
          <div className="container">
            <Link to="/" className="logo">
              <img src={logoImg} alt="Compre Di Casa" />
            </Link>

            <form action="">
              <input name="search" placeholder="O que você esta procurando? " />
              <button type="submit">
                <FaSearch size={24} />
              </button>
            </form>

            <HeadNav>
              <div className="favorite-float-head">
                <button
                  type="button"
                  className="favorite-wp"
                  onClick={() => favoriteFloatUpDisplay()}
                >
                  <span>Lista de desejos</span>
                  <FaHeart size={26} />
                </button>
                <FavoriteFloatUp />
              </div>
              <div className="cart-float-head">
                <button
                  type="button"
                  className="cart-wp"
                  onClick={() => cartFloatUpDisplay()}
                >
                  <span>Carrinho</span>
                  <div className="notification">
                    <MdShoppingCart size={28} />
                    <div className="count">{products.length}</div>
                  </div>
                </button>
                <CartFloatUp />
              </div>
              <div>
                {isAuthenticated() ? (
                  <Link to="/dashboard">
                    <div className="account">
                      <span>Minha conta</span>
                      <span>
                        <small>{customer.name}</small>
                      </span>
                    </div>
                    <div className="avatar">
                      <img src={customer.avatar_url} alt={customer.name} />
                    </div>
                  </Link>
                ) : (
                  <Link to="/signin">
                    <span>Login</span>
                    <FaUserCircle size={26} />
                  </Link>
                )}
              </div>
            </HeadNav>
          </div>
        </HeadContent>
      </WrapperHead>

      <Nav />
      <NavFloat />
    </Container>
  );
};

export default Header;
