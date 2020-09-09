import React, { useCallback, useMemo } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useCart } from '../../hooks/cart';
import iconSleep from '../../assets/icon-sleep.svg';
import imgFile from '../../assets/file-image-product.svg';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Title,
  Content,
  ListProduct,
  Total,
  Product,
  Price,
  ButtonTrash,
} from './styles';

interface IImagesProduct {
  id: string;
  product_id: string;
  picture: string;
  picture_url: string;
  featured: number;
}

interface IProduct {
  id: string;
  name: string;
  quantity: number;
  images_product: IImagesProduct[];
  price: number;
  old_price: number;
  description: string;
}

const CartFloatUp: React.FC = () => {
  const { remove, products } = useCart();

  const imageWhitoutFeatured = useCallback((arr) => {
    const ar = arr.reduce((accumulate: any, image: any) => {
      return image.featured === 0 ? accumulate + 1 : accumulate;
    }, 0);

    return ar;
  }, []);

  const cartSubTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.price * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

  const handleRemoveCartFloat = useCallback(
    (id: string) => {
      remove(id);

      if (totalItensInCart === 1) {
        setTimeout(() => {
          $('.cart-float-up').removeClass('act');
        }, 3000);
      }
    },
    [remove, totalItensInCart]
  );

  return (
    <>
      <Container className="cart-float-up">
        {products.length === 0 ? (
          <div className="without-product">
            <Title>Carrinho</Title>
            <div>
              <img src={iconSleep} alt="" />
            </div>
            <strong>Seu carrinho está vazio</strong>
          </div>
        ) : (
          <div>
            <Title>
              {totalItensInCart} ite{totalItensInCart > 1 ? 'ns' : 'm'}{' '}
              adicionado em seu carrinho
            </Title>
            <Content>
              <ListProduct>
                <ul
                  className={
                    products.length && products.length > 4 ? 'scroll-y' : ''
                  }
                >
                  {products.map((product) => {
                    const notFeatured = imageWhitoutFeatured(
                      product.images_product
                    );
                    return (
                      <li key={product.id}>
                        <Product>
                          <div>
                            {product.images_product.length === 0 && (
                              <img src={imgFile} alt="no-exist-file" />
                            )}
                            {product.images_product.map(
                              (image) =>
                                image.featured === 1 && (
                                  <img
                                    key={image.id}
                                    src={image.picture_url}
                                    alt="Produto"
                                  />
                                )
                            )}
                            {notFeatured !== 0 &&
                              notFeatured === product.images_product.length && (
                                <img
                                  src={product.images_product[0].picture_url}
                                  alt="Produto"
                                />
                              )}
                          </div>
                          <div>
                            <p>{product.name}</p>
                            <div>
                              <Price>
                                <span>{product.quantity} x </span>
                                {formatValue(product.price)}
                              </Price>
                            </div>
                          </div>
                        </Product>

                        <ButtonTrash
                          onClick={() => handleRemoveCartFloat(product.id)}
                        >
                          <FaTimesCircle size={16} />
                        </ButtonTrash>
                      </li>
                    );
                  })}
                </ul>
              </ListProduct>
              <Total>
                <span>
                  SUBTOTAL: <strong>{cartSubTotal}</strong>
                </span>
                <Link to="/cart" className="view-cart">
                  Ver meu carrinho
                </Link>
              </Total>
            </Content>
          </div>
        )}
      </Container>
    </>
  );
};

export default CartFloatUp;
