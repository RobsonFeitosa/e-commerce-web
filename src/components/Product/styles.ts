import styled, { keyframes, css } from 'styled-components';

interface IButtonProps {
  loading?: boolean;
  onClick: () => void;
}

export const Container = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;

  text-align: center;

  &:hover h2 {
    color: #000;
  }

  &:hover .wish {
    transform: translateX(0);
    opacity: 1;
  }

  .wish.act {
    transform: translateX(0);
    opacity: 0.8;
  }

  &:hover .view {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover figcaption > a {
    background: #e2c30a;
    color: #4b4b4b;
  }

  .discount {
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 2;

    color: #fff;
    background: #be0f0f;
    font-weight: 900;

    display: block;
    padding: 2px 6px;
  }

  .wrapperImage {
    position: relative;
    z-index: 2;
    overflow: hidden;

    border: 1px solid #f2f2f2;

    margin-bottom: 15px;

    img {
      transition: transform 0.2s;
      position: relative;
      z-index: 1;
      width: 100%;
      height: auto;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .buttonBuy {
    text-decoration: none !important;
    text-transform: uppercase;
    color: #ffffffee;
    background: #4b4b4b;
    font-size: 13px;
    transition: all 0.2s;
    cursor: pointer;

    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    outline: none;
  }

  h2 {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    transition: color 0.2s;
    height: 42px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FloatUtils = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 3;
`;

export const Btn = styled.button`
  display: flex;
  transition: opacity 0.2s;
  background: transparent;
  border: 0;
  outline: none;

  svg {
    color: #e12148;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &.wish {
    transform: translateY(-80px);
    transition: opacity 0.2s, transform 0.2s;
    opacity: 0;
  }

  &.view {
    transform: translateY(-80px);
    transition: opacity 0.2s, transform 0.3s;
    opacity: 0;

    margin-top: 4px;
  }
`;

export const Price = styled.div`
  font-size: 14px;

  display: block;
  margin: 10px 0;
  margin-bottom: 20px;

  .oldPrice {
    color: #929292;
    text-decoration: line-through;
    margin-right: 15px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonAdd = styled.button<IButtonProps>`
  text-decoration: none !important;
  text-transform: uppercase;
  color: #ffffffee;
  background: #be0f0f;
  font-size: 13px;
  transition: all 0.2s;
  cursor: pointer;

  width: 60px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
