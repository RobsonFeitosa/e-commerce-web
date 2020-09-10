import React, { useCallback, useMemo } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useFavorite } from '../../hooks/favorite';
import iconSleep from '../../assets/icon-sleep.svg';
import imgFile from '../../assets/file-image-product.svg';
import formatValue from '../../utils/formatValue';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  Content,
  ListProduct,
  Product,
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
  slug: string;
  quantity: number;
  images_product: IImagesProduct[];
  price: number;
  old_price: number;
  description: string;
}

const FavoriteFloatUp: React.FC = () => {
  const { remove, favorites } = useFavorite();

  const { customer } = useAuth();

  const imageWhitoutFeatured = useCallback((arr) => {
    const ar = arr.reduce((accumulate: any, image: any) => {
      return image.featured === 0 ? accumulate + 1 : accumulate;
    }, 0);

    return ar;
  }, []);

  const favoriteSubTotal = useMemo(() => {
    const total = favorites.reduce((accumulator, favorite) => {
      const favoritesSubtotal = favorite.price * favorite.quantity;

      return accumulator + favoritesSubtotal;
    }, 0);

    return formatValue(total);
  }, [favorites]);

  const totalItensInFavorite = useMemo(() => {
    const total = favorites.reduce((accumulator, favorite) => {
      const favoritesQuantity = favorite.quantity;

      return accumulator + favoritesQuantity;
    }, 0);

    return total;
  }, [favorites]);

  const handleRemoveFavoriteFloat = useCallback(
    (id: string) => {
      remove(id);

      if (totalItensInFavorite === 1) {
        setTimeout(() => {
          $('.favorite-float').removeClass('act');
        }, 3000);
      }
    },
    [remove, totalItensInFavorite]
  );

  return (
    <>
      <Container className="favorite-float-up">
        {favorites.length === 0 ? (
          <div className="without-product">
            <Title>Favoritos</Title>
            <div>
              <img src={iconSleep} alt="" />
            </div>
            <strong>Nenhum item adicionado</strong>
          </div>
        ) : (
          <div>
            <Title>
              {totalItensInFavorite} favorito
              {totalItensInFavorite > 1 ? 's' : ''}
            </Title>
            <Content>
              <ListProduct>
                <ul
                  className={
                    favorites.length && favorites.length > 4 ? 'scroll-y' : ''
                  }
                >
                  {favorites.map((favorite) => {
                    const notFeatured = imageWhitoutFeatured(
                      favorite.images_product
                    );
                    return (
                      <li key={favorite.id}>
                        <Product>
                          <div>
                            {favorite.images_product.length === 0 && (
                              <img src={imgFile} alt="no-exist-file" />
                            )}
                            {favorite.images_product.map(
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
                              notFeatured ===
                                favorite.images_product.length && (
                                <img
                                  src={favorite.images_product[0].picture_url}
                                  alt="Produto"
                                />
                              )}
                          </div>
                          <div>
                            <Link
                              className="buttonBuy"
                              to={{
                                pathname: `/products/${favorite.slug}/${favorite.id}`,
                                state: { id: favorite.id, slug: favorite.slug },
                              }}
                            >
                              <p>{favorite.name}</p>
                            </Link>
                          </div>
                        </Product>

                        <ButtonTrash
                          onClick={() => handleRemoveFavoriteFloat(favorite.id)}
                        >
                          <FaTimesCircle size={16} />
                        </ButtonTrash>
                      </li>
                    );
                  })}
                </ul>
              </ListProduct>

              {customer && (
                <Link to="/wish" className="view-wish">
                  Meus desejos
                </Link>
              )}
            </Content>
          </div>
        )}
      </Container>
    </>
  );
};

export default FavoriteFloatUp;
