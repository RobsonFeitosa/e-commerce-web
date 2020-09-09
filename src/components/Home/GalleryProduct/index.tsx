import React, { useCallback } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Product from '../../Product';

import { Container, Header, Main } from './styles';

const GalleryProduct: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const ButtonGroup = useCallback(({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="carousel-button-group">
        <div>
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
      </div>
    );
  }, []);

  return (
    <Container className="container">
      <Header>
        <div>
          <span>
            PRODUTOS<strong> DIVERSOS</strong>
          </span>
        </div>

        <div className="navGallery">
          <a href="/" className="active">
            ESCRITÓRIO
          </a>
          <a href="/">QUARTO</a>
          <a href="/">BANHEIRO</a>
          <a href="/">CONZINHA</a>
        </div>
      </Header>
      <Main>
        <Carousel
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          draggable={false}
          responsive={responsive}
          itemClass="carousel-item-padding-40-px"
        >
          {/* <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div>
          <div>
            <Product />
            <Product />
          </div> */}
        </Carousel>
      </Main>
    </Container>
  );
};

export default GalleryProduct;
