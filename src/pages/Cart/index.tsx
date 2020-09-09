import React, { useEffect, useCallback, useMemo } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import { useCart } from '../../hooks/cart';
import imgFile from '../../assets/file-image-product.svg';

import formatValue from '../../utils/formatValue';
import {
  Container,
  HeaderAccount,
  Content,
  ListProduct,
  Shipping,
  ResultShipping,
  HeaderListProduct,
  Product,
  Quantity,
  Price,
  ButtonTrash,
  Resume,
  TitleR,
  ResultCart,
  ButtonContinue,
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

const Cart: React.FC = () => {
  const { increment, decrement, remove, products } = useCart();
  const history = useHistory();

  const imageWhitoutFeatured = useCallback((arr) => {
    const ar = arr.reduce((accumulate: any, image: any) => {
      return image.featured === 0 ? accumulate + 1 : accumulate;
    }, 0);

    return ar;
  }, []);

  const handleIncrement = useCallback(
    (id: string): void => {
      increment(id);
    },
    [increment]
  );

  const handleDecrement = useCallback(
    (id: string): void => {
      decrement(id);
    },
    [decrement]
  );

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

  useEffect(() => {
    window.scrollTo(0, 0);

    $('.cart-float-up').removeClass('act');

    products.length === 0 && history.push('/');

    const resume = document.querySelector('.resume-total');
    if (resume) {
      resume.classList.add('act');
      setTimeout(() => {
        resume.classList.remove('act');
      }, 1000);
    }
  }, [products, history]);

  return (
    <>
      {products.length === 0 ? (
        <Container className="container">
          <HeaderAccount>
            <h2>Carrinho</h2>
          </HeaderAccount>
          <span>n existe produto</span>
        </Container>
      ) : (
        <Container className="container">
          <HeaderAccount>
            <h2>Carrinho</h2>
          </HeaderAccount>

          <Content>
            <ListProduct>
              <HeaderListProduct>
                <span>produto</span>
                <span>qtd.</span>
                <span>Preço</span>
              </HeaderListProduct>
              <ul>
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
                        <p>{product.name}</p>
                      </Product>

                      <Quantity>
                        <div>
                          <button
                            type="button"
                            onClick={() => handleDecrement(product.id)}
                          >
                            <FaMinus size={18} />
                          </button>
                          <div className="counterQty">{product.quantity}</div>
                          <button
                            type="button"
                            onClick={() => handleIncrement(product.id)}
                          >
                            <FaPlus size={18} />
                          </button>
                        </div>
                      </Quantity>

                      <Price>{formatValue(product.price)}</Price>

                      <ButtonTrash onClick={() => remove(product.id)}>
                        <FaTrash size={16} />
                      </ButtonTrash>
                    </li>
                  );
                })}
              </ul>

              <Shipping>
                <span>Calcular frete</span>
                <input type="text" placeholder="00000-000" />
                <button type="button">ok</button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
                >
                  não sei meu cep
                </a>
              </Shipping>
              <ResultShipping>
                <input type="radio" checked /> receber até dia 18 -
                <strong> grátis</strong>
              </ResultShipping>
            </ListProduct>
            <Resume className="resume-total">
              <div>
                <TitleR>resumo do pedido</TitleR>
                <ResultCart>
                  <div className="listItem">
                    <div>
                      <span>
                        {totalItensInCart} produto{totalItensInCart > 1 && 's'}
                      </span>
                      <span>{cartSubTotal}</span>
                    </div>

                    <div className="frete">
                      <span>frete</span>
                      <span>grátis</span>
                    </div>
                  </div>
                  <div className="totalItem">
                    <div>
                      <strong>total</strong>
                      <div>
                        <strong className="total">{cartSubTotal}</strong>
                        <p>em até 12x sem juros</p>
                      </div>
                    </div>
                  </div>
                </ResultCart>
                <ButtonContinue>continuar</ButtonContinue>
              </div>
            </Resume>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Cart;
