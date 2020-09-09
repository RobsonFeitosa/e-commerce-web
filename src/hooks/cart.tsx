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

interface ICartContext {
  products: IProduct[];
  switchToCart(product: Omit<IProduct, 'quantity'>): void;
  addToCart(product: IAddToCart): void;
  increment(id: string): void;
  decrement(id: string): void;
  remove(id: string): void;
}
interface IAddToCart {
  product: IProduct;
  qty?: number;
}
const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = localStorage.getItem('@CompreDiCasa:products');

      if (storagedProducts) {
        setProducts([...JSON.parse(storagedProducts)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async ({ product, qty = 1 }) => {
      const productsExists = products.find((p) => p.id === product.id);
      if (productsExists) {
        setProducts(
          products.map((p) =>
            p.id === product.id ? { ...product, quantity: qty } : p
          )
        );
      } else {
        setProducts([...products, { ...product, quantity: qty }]);
      }
    },
    [products]
  );

  const switchToCart = useCallback(
    async (product) => {
      const productsExists = products.find((p) => p.id === product.id);
      if (productsExists) {
        setProducts(products.filter((p) => p.id !== product.id));
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }
    },
    [products]
  );

  const increment = useCallback(
    async (id) => {
      const newProducts = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      setProducts(newProducts);
    },
    [products]
  );

  const decrement = useCallback(
    async (id) => {
      const newProducts = products.map((product) =>
        product.quantity > 1 && product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      );

      setProducts(newProducts);
    },
    [products]
  );

  const remove = useCallback(
    async (id) => {
      products.map((product) =>
        setProducts(products.filter((p) => p.id !== product.id))
      );
    },
    [products]
  );

  useEffect(() => {
    localStorage.setItem('@CompreDiCasa:products', JSON.stringify(products));
  }, [products]);

  const value = React.useMemo(
    () => ({ addToCart, switchToCart, increment, decrement, remove, products }),
    [products, addToCart, switchToCart, increment, decrement, remove]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
