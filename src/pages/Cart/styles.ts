import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
`;

export const HeaderAccount = styled.div`
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #002357;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const HeaderListProduct = styled.div`
  display: flex;
  font-weight: 600;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 15px;

  color: #353535;
  font-weight: bold;

  span:nth-child(1) {
    width: 60%;
  }

  span:nth-child(2) {
    width: 23%;
    padding-left: 4px;
  }

  span:nth-child(3) {
    width: 12%;
    padding-left: 4px;
  }
`;

export const ListProduct = styled.div`
  width: 70%;
  padding-right: 30px;

  ul {
    padding-left: 0;

    li {
      list-style: none;
      border-bottom: 1px solid #d9d9d9;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Shipping = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  input {
    outline: none;
    height: 40px;
    width: 140px;
    padding: 0 10px;
    border: 1px solid #c4c4c4;

    margin-left: 20px;
    margin-right: 10px;
  }

  button {
    width: 45px;
    height: 40px;
    margin-right: 20px;
    background: transparent;
    border: 2px solid #002357 !important;
    color: #002357;
    font-weight: bold;
    border-radius: 3px;
  }
`;

export const ResultShipping = styled.div`
  margin-top: 30px;
  background: #f4f4f4;
  padding: 18px 20px;

  input {
    margin-right: 10px;
  }

  strong {
    color: #36b159;
  }
`;

export const Product = styled.div`
  width: 60%;
  padding-right: 15px;
  display: flex;
  align-items: center;

  img {
    width: 120px;
    margin-right: 20px;
  }

  p {
    color: #353535;
    font-weight: bold;
  }
`;

export const Quantity = styled.div`
  width: 23%;
  padding-right: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;
    height: 50px;
    padding: 10px 15px;
    border: 1px solid #cfcfcf;
    border-radius: 4px;

    button {
      border: 0;
      outline: none;
      background: transparent;
      display: flex;
      align-items: center;
      color: #353535;
      transition: color 0.2s;

      &:hover {
        color: #be0f0f;
      }
    }

    .counterQty {
      justify-content: center;
    }
  }
`;

export const Price = styled.div`
  width: 12%;
  font-weight: bold;
  color: #353535;
`;

export const ButtonTrash = styled.button`
  width: 5%;
  border: 0;
  background: transparent;
  outline: none;
  color: #be0f0f;
`;

export const Resume = styled.div`
  width: 30%;

  > div {
    background: #f4f4f4;
    padding: 25px;
  }
  .total {
    transition: color 0.2s;
  }
  &.act .total {
    color: #be0f0f;
    font-weight: bold;
  }

  .totalItem > div {
    margin-bottom: 0 !important;
  }
`;

export const TitleR = styled.strong`
  color: #353535;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  display: block;
`;

export const ResultCart = styled.div`
  > div {
    padding: 20px 0;
    border-bottom: 1px solid #d9d9d9;
  }

  .totalItem,
  .listItem {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;
      margin-bottom: 10px;

      strong {
        font-weight: 600;
        font-size: 16px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }

  .frete {
    span:last-child {
      color: #36b159;
    }
  }
`;

export const ButtonContinue = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  margin-top: 25px;

  background: #be0f0f;
  border: 0;
  color: #ffffff;
  outline: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s;
  text-shadow: 0 1px 2px #00000060;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background: #e2c30a;
  }
`;
