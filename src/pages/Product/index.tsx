import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaSpinner } from 'react-icons/fa';
import {
  MdAddShoppingCart,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdCheck,
} from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';
import formatedValue from '../../utils/formatValue';

import MostPopular from '../../components/Home/MostPopular';

import { Main, Infor, Quantity, Price, Button, MoreProduct } from './styles';

import ToRank from '../../components/ToRank';

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

interface IHistory {
  id: string;
  slug: string;
}

interface IImages {
  original: string;
  thumbnail: string;
}

const Product: React.FC = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [loading, setLoading] = useState(false);
  const location = useLocation<IHistory>();

  const { addToCart, products } = useCart();

  const { id, slug } = location.state;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`/products/${slug}/${id}`);
      window.scrollTo(0, 0);

      setProduct(response.data);
    }

    loadProduct();
  }, [id, slug]);

  const newImages: IImages[] = [];
  product.images_product &&
    product.images_product.map((image) =>
      newImages.push({
        original: image.picture_url,
        thumbnail: image.picture_url,
      })
    );

  const handleAddToCart = useCallback(
    (prod): void => {
      setLoading(true);
      setTimeout(() => {
        addToCart({ product: prod, qty: count });
        setLoading(false);
      }, 500);
    },
    [addToCart, count]
  );

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    if (count > 1) {
      setCount(count - 1);
    }
  }, [count]);

  const old_price = product.old_price && formatedValue(product.old_price);
  const price = formatedValue(product.price);

  const checkAddCart = products.find((p) => p.id === product.id && true);
  const CheckProductCartIcon = (): any =>
    checkAddCart ? <MdCheck size={20} /> : <MdAddShoppingCart size={20} />;

  const code = String(product.id).slice(0, 8).toUpperCase();

  return product ? (
    <>
      <Container>
        <Main>
          <Row className="flexCenter">
            <Col lg="4">
              <ImageGallery items={newImages} />
            </Col>

            <Col lg="7">
              <Infor>
                <h2>{product.name}</h2>
                <div className="flexCenterBetween">
                  <Price>
                    {old_price && <span className="old">{old_price}</span>}
                    <span className="new"> {price}</span>
                  </Price>
                  <div className="code">
                    <span>Código: #{code} </span>
                  </div>
                </div>

                <ToRank />

                {product.description && (
                  <div className="description">
                    <span>Descrição</span>
                    <p>{product.description}</p>
                  </div>
                )}

                <Quantity>
                  <div className="actionButton">
                    <button type="button" onClick={() => handleIncrement()}>
                      <MdKeyboardArrowUp />
                    </button>
                    <button type="button" onClick={() => handleDecrement()}>
                      <MdKeyboardArrowDown />
                    </button>
                  </div>
                  <input name="qty" value={count} readOnly />
                </Quantity>

                <Button
                  loading={loading}
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar ao Carrinho
                  {loading ? <FaSpinner size={22} /> : <CheckProductCartIcon />}
                  {/* <MdAddShoppingCart size={22} /> */}
                </Button>
              </Infor>
            </Col>
          </Row>
        </Main>
        <MoreProduct>
          <MostPopular />
        </MoreProduct>
      </Container>
    </>
  ) : (
    <span>Produto n encontrado</span>
  );
};

export default Product;
