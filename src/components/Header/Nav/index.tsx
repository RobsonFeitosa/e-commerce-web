import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaTag, FaAngleDown } from 'react-icons/fa';

import { Container, NavContent } from './styles';

import api from '../../../services/api';

interface IImagesProduct {
  id: string;
  product_id: string;
  picture: string;
  picture_url: string;
  featured: boolean;
}

interface IProduct {
  id: number;
  name: string;
  quantity: number;
  categories: Array<string>;
  images_product: IImagesProduct[];
  price: string;
  old_price: string;
  description: string;
}

interface ISubCategories {
  id: number;
  name: string;
  parent_id: number;
}

interface ICategories {
  id: number;
  name: string;
  parent_id: number;
  subcategories?: ISubCategories[];
}

interface ICat {
  id: string;
  name: string;
  parent_id: string;
  children: {
    id: string;
    name: string;
    parent_id: string;
  }[];
}

interface ICatProp {
  arr: ICat[];
  parent_id: string;
}

const Nav: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const categories: ICategories[] = [];
  products.map((product: IProduct): void => {
    if (product.categories) {
      const category: ICategories[] = JSON.parse(product.categories.toString());
      category.map((cat: any) => categories.push(cat));
    }
  });

  const getNestedChildren = useCallback((arr, parent_id) => {
    const nav: ICat[] = [];

    Object.keys(arr).forEach((key) => {
      const cat = arr[key];

      const existing = nav.filter((v, i) => {
        return v.name === cat.name;
      });

      if (existing.length) {
        const existingIndex = nav.indexOf(existing[0]);

        nav[existingIndex].name = cat.name;
      } else if (arr[key].parent_id === parent_id) {
        const children = getNestedChildren(arr, arr[key].id);

        if (Object.assign(children).length) {
          arr[key].children = children;
        }

        nav.push(arr[key]);
      }
    });

    return nav;
  }, []);

  const nav = getNestedChildren(categories, null);

  return (
    <Container>
      <div className="container">
        <div className="tag">
          <FaTag size={16} />
          APROVEITE TODA LINHA INDUSTRIAL COM
          <strong>10% DE DESCONTO</strong>
        </div>

        <NavContent>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {nav &&
              nav.map((n) => (
                <li key={n.id}>
                  <Link to="/">
                    {n.name}
                    {n.children && (
                      <>
                        <FaAngleDown size={22} />
                        <ul>
                          {n.children.map((category) => (
                            <li>
                              <Link to="/">{category.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </NavContent>
      </div>
    </Container>
  );
};

export default Nav;
