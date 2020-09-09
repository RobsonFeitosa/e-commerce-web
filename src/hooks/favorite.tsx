import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

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

interface IFavoriteContext {
  favorites: IProduct[];
  switchToFavorite(favorite: Omit<IProduct, 'quantity'>): void;
  addToFavorite(favorite: IAddToFavorite): void;
  remove(id: string): void;
}
interface IAddToFavorite {
  favorite: IProduct;
}
const FavoriteContext = createContext<IFavoriteContext | null>(null);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = localStorage.getItem('@CompreDiCasa:favorites');

      if (storagedProducts) {
        setFavorites([...JSON.parse(storagedProducts)]);
      }
    }

    loadProducts();
  }, []);

  const addToFavorite = useCallback(
    async ({ product, qty = 1 }) => {
      const favoritesExist = favorites.find((p) => p.id === product.id);
      if (favoritesExist) {
        setFavorites(
          favorites.map((p) =>
            p.id === product.id ? { ...product, quantity: qty } : p
          )
        );
      } else {
        setFavorites([...favorites, { ...product, quantity: qty }]);
      }
    },
    [favorites]
  );

  const switchToFavorite = useCallback(
    async (product) => {
      const productsExists = favorites.find((p) => p.id === product.id);
      if (productsExists) {
        setFavorites(favorites.filter((p) => p.id !== product.id));
      } else {
        setFavorites([...favorites, { ...product, quantity: 1 }]);
      }
    },
    [favorites]
  );

  const increment = useCallback(
    async (id) => {
      const newProducts = favorites.map((favorite) =>
        favorite.id === id
          ? { ...favorite, quantity: favorite.quantity + 1 }
          : favorite
      );

      setFavorites(newProducts);
    },
    [favorites]
  );

  const decrement = useCallback(
    async (id) => {
      const newFavorites = favorites.map((favorite) =>
        favorite.quantity > 1 && favorite.id === id
          ? {
              ...favorite,
              quantity: favorite.quantity - 1,
            }
          : favorite
      );

      setFavorites(newFavorites);
    },
    [favorites]
  );

  const remove = useCallback(
    async (id) => {
      favorites.map((product) =>
        setFavorites(favorites.filter((p) => p.id !== product.id))
      );
    },
    [favorites]
  );

  useEffect(() => {
    localStorage.setItem('@CompreDiCasa:favorites', JSON.stringify(favorites));
  }, [favorites]);

  const value = React.useMemo(
    () => ({
      addToFavorite,
      switchToFavorite,
      increment,
      decrement,
      remove,
      favorites,
    }),
    [favorites, addToFavorite, switchToFavorite, increment, decrement, remove]
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): IFavoriteContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(`useFavorite must be used within a FavoriteProvider`);
  }

  return context;
}

export { FavoriteProvider, useFavorite };
