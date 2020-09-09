import React, { useEffect, useState, useCallback } from 'react';
import { MdAddShoppingCart, MdVisibility, MdCheck } from 'react-icons/md';

import { FaRegHeart, FaSpinner, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useCart } from '../../hooks/cart';
import { useFavorite } from '../../hooks/favorite';

import imgFile from '../../assets/file-image-product.svg';

import formatedValue from '../../utils/formatValue';

import ToRank from '../ToRank';

import { Container, Btn, Price, ButtonAdd, FloatUtils } from './styles';

interface IImagesProduct {
  id: string;
  product_id: string;
  picture: string;
  picture_url: string;
  featured: number;
}

interface IRequestProps {
  id: string;
  name: string;
  quantity: number;
  images_product: IImagesProduct[];
  price: number;
  slug: string;
  old_price: number;
  description: string;
}

interface IProduct {
  product: IRequestProps;
}
const Product: React.FC<IProduct> = (product) => {
  const { switchToFavorite, favorites } = useFavorite();
  const { switchToCart, products } = useCart();
  const [idProduct, setIdProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const item = product.product;

  const handleFavoriteClick = useCallback(
    (prod) => {
      switchToFavorite(prod);
    },
    [switchToFavorite]
  );

  const imageWhitoutFeatured = useCallback((arr) => {
    const ar = arr.reduce((accumulate: any, image: any) => {
      return image.featured === 0 ? accumulate + 1 : accumulate;
    }, 0);

    return ar;
  }, []);

  const notFeatured = imageWhitoutFeatured(item.images_product);

  const handleSwitchToCart = useCallback(
    (prod: IRequestProps): void => {
      if (products) {
        setLoading(true);
        setTimeout(() => {
          switchToCart(prod);
          const timeOut = setTimeout(() => {
            $('.cart-float-up').removeClass('act');
          }, 4000);
          $('.cart-float-up').addClass('act');
          setLoading(false);

          $('.cart-float-up').on('mouseenter', () => {
            products.length > 0 && clearTimeout(timeOut);
          });
        }, 500);
      }

      document.querySelectorAll('header .count').forEach((element) => {
        element.classList.add('act');
        setTimeout(() => {
          element.classList.remove('act');
        }, 1000);
      });
    },
    [switchToCart, products]
  );

  useEffect(() => {
    setIdProduct(item.id);
  }, [products, item]);

  const checkAddCart = products.find((p: any) => p.id === item.id && true);
  const checkAddFavorite = favorites.find((p: any) => p.id === item.id && true);

  const CheckProductCartIcon = (): any =>
    checkAddCart ? <MdCheck size={20} /> : <MdAddShoppingCart size={20} />;

  const CheckProductFavoriteIcon = (): any =>
    checkAddFavorite ? <FaHeart size={22} /> : <FaRegHeart size={22} />;

  const old_price = item.old_price && formatedValue(item.old_price);
  const price = formatedValue(item.price);

  return (
    <Container>
      <figure>
        <div>
          <FloatUtils>
            <Btn
              className={`wish ${checkAddFavorite ? 'act' : ''}`}
              onClick={() => handleFavoriteClick(item)}
            >
              <CheckProductFavoriteIcon />
            </Btn>
            <Btn className="view">
              <MdVisibility size={22} />
            </Btn>
          </FloatUtils>
          <div className="discount"> -11% </div>
          <div className="wrapperImage">
            {item.images_product.length === 0 && (
              <img src={imgFile} alt="no-exist-file" />
            )}
            {item.images_product.map(
              (img) =>
                img.featured === 1 && (
                  <img key={img.id} src={img.picture_url} alt="Produto" />
                )
            )}
            {notFeatured !== 0 &&
              notFeatured === item.images_product.length && (
                <img src={item.images_product[0].picture_url} alt="Produto" />
              )}
          </div>
        </div>
        <figcaption>
          <h2>{item.name}</h2>
          <ToRank />
          <Price>
            {old_price && <span className="oldPrice">{old_price}</span>}
            <span className="newPrice">{price}</span>
          </Price>
          <div className="wrapper-center">
            <Link
              className="buttonBuy"
              to={{
                pathname: `/products/${item.slug}/${item.id}`,
                state: { id: idProduct, slug: item.slug },
              }}
            >
              Comprar
            </Link>
            <ButtonAdd
              loading={loading}
              onClick={() => handleSwitchToCart(item)}
            >
              {loading ? <FaSpinner size={20} /> : <CheckProductCartIcon />}
            </ButtonAdd>
          </div>
        </figcaption>
      </figure>
    </Container>
  );
};

export default Product;
