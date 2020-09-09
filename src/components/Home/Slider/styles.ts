import styled from 'styled-components';

import leftVector from '../../../assets/left-vector-slide.svg';
import rightVector from '../../../assets/right-vector-slide.svg';

export const Container = styled.div`
  display: block;
  margin-bottom: 3rem;

  .awssld {
    --slider-height-percentage: 36%;
    --slider-transition-duration: 692ms;
    --organic-arrow-thickness: 2px;
    --organic-arrow-border-radius: 17px;
    --organic-arrow-height: 31px;
    --organic-arrow-color: #e2c30a;
    --control-button-width: 9%;
    --control-button-height: 26%;
    --control-button-background: transparent;
    --loader-bar-color: #851515;
    --loader-bar-height: 5px;
  }
  .awssld__bullets {
    display: none;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  text-align: center;

  position: absolute;
  left: 150px;
  top: 20%;
  z-index: 1;

  width: 100%;
  height: 62%;
  max-width: 640px;
  padding: 0 40px;

  &::before {
    content: '';
    width: 200px;
    height: 200px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: url(${leftVector}) no-repeat left top;
  }

  &::after {
    content: '';
    width: 144px;
    height: 91px;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    background: url(${rightVector}) no-repeat left top;
  }

  span {
    font-size: 24px;
    text-transform: uppercase;
    display: block;
    font-weight: 100;
  }

  h2 {
    font-size: 44px;
    color: #be0f0f;
    font-family: 'Bebas Neue';
    font-weight: normal;
  }

  p {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    color: #13131340;
    background: rgb(193, 167, 9);
    background: linear-gradient(
      355deg,
      rgba(193, 167, 9, 1) 0%,
      rgba(255, 225, 48, 1) 72%
    );
    text-decoration: none;
    border: 1px solid #d6d6d6;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 210px;
    height: 50px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 26px;

    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: rgb(193, 167, 9);
      background: linear-gradient(
        355deg,
        rgba(193, 167, 9, 1) 0%,
        rgba(255, 225, 48, 1) 100%
      );
    }
  }
`;
