import React, { useCallback } from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useAuth } from '../../../hooks/auth';
import { useCart } from '../../../hooks/cart';

import CartFloatUp from '../../CartFloatUp';
import FavoriteFloatUp from '../../FavoriteFloatUp';

import logoImg from '../../../assets/logo_fundo_azul.svg';

import Nav from '../Nav';

import { Container, HeadContent, HeadNav } from './styles';

const Header: React.FC = () => {
  const { customer, isAuthenticated } = useAuth();
  const { products } = useCart();

  if (window.innerWidth > 768) {
    const navScrollD = $('#root .floatNav');
    $(window).scroll(() => {
      const x = $(window).scrollTop();
      if (x && x > 180) {
        navScrollD.addClass('fixedActive');
      } else {
        navScrollD.removeClass('fixedActive');
      }
    });
  }

  const favoriteFloatUpDisplay = useCallback(() => {
    $('.favorite-float').toggleClass('act');
  }, []);

  const cartFloatUpDisplay = useCallback(() => {
    $('.cart-float').toggleClass('act');
  }, []);

  return (
    <Container className="floatNav">
      <HeadContent>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Compre Di Casa" />
          </Link>

          <Nav />

          <HeadNav>
            <div className="favorite-float">
              <button
                type="button"
                className="favorite-wp"
                onClick={() => favoriteFloatUpDisplay()}
              >
                <FaHeart size={26} />
              </button>
              <FavoriteFloatUp />
            </div>
            <div className="cart-float">
              <button
                type="button"
                className="cart-wp"
                onClick={() => cartFloatUpDisplay()}
              >
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
                  <FaUserCircle size={26} />
                </Link>
              )}
            </div>
          </HeadNav>
        </div>
      </HeadContent>
    </Container>
  );
};

export default Header;
