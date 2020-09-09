import React, { useCallback, useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import api from '../../../services/api';

import { Container } from './styles';

import Product from '../../Product';

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
  slug: string;
  quantity: number;
  images_product: IImagesProduct[];
  price: number;
  old_price: number;
  description: string;
}

const SpecialProduct: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = useCallback(({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="carousel-button-group">
        <button
          type="button"
          className={currentSlide === 0 ? 'disable' : ''}
          onClick={() => previous()}
        >
          <MdNavigateBefore />
        </button>
        <button type="button" onClick={() => next()}>
          <MdNavigateNext />
        </button>
      </div>
    );
  }, []);

  return (
    <Container>
      <header>
        <div>
          <span>
            <strong>PRODUTOS</strong> ESPECIAIS
          </span>
        </div>
      </header>

      <Carousel
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        draggable={false}
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
      >
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Carousel>
    </Container>
  );
};

export default SpecialProduct;
