import styled from 'styled-components';

export const Container = styled.div`
  opacity: 0;
  visibility: hidden;
  width: 400px;
  padding: 20px;
  position: absolute;
  right: -20px;
  top: 51px;
  z-index: 3;
  background: #ffffff !important;
  box-shadow: 0px 4px 8px #00000036;
  border: 4px double #e2c30a66;
  border-top: 0;
  transition: all ease-in-out 0.1s;

  &::before {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 9px solid #ffffff;
    content: '';
    position: absolute;
    bottom: 100%;
    right: 20px;
    z-index: 123;
  }

  &.act {
    opacity: 1;
    visibility: visible;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    position: relative;

    &:last-child {
      border: 0;
    }
  }

  .without-product {
    height: 300px;

    > div {
      display: flex;
      justify-content: center;
      height: 200px;
      align-items: center;
    }

    img {
      width: 120px;
    }

    strong {
      text-align: center;
      display: block;
    }
  }
`;

export const Title = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: block;
`;

export const ListProduct = styled.div`
  .scroll-y {
    height: 350px;
    overflow-y: scroll;
  }
`;

export const Total = styled.div`
  margin-top: 20px;
  border-top: 1px solid #f1f1f1;
  padding-top: 20px;

  > span {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    display: block;
    color: #5d5d5d;
    text-align: center;

    > strong {
      color: #002357;
      font-weight: bold;
    }
  }

  .view-cart {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e2c30a;
    text-transform: uppercase;
    margin-top: 20px;
    color: #002357;
    font-weight: 600;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    margin-right: 15px;
  }
  p {
    color: #353535;
    margin-bottom: 0;
    font-size: 12.5px;
    line-height: 15px;
    padding-right: 15px;
    display: inline-block;
  }
`;

export const Price = styled.div`
  font-weight: 600;
  color: #353535;
`;

export const ButtonTrash = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  color: #7d828a;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #be0f0f;
  }
`;
