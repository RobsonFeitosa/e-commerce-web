import styled, { keyframes, css } from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

interface IButtonProps {
  loading?: boolean;
  onClick: () => void;
}

export const Main = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  .image-gallery-play-button,
  .image-gallery-fullscreen-button {
    display: none;
  }
  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    border: 4px solid #e2c30a;
  }
  .image-gallery-icon:hover {
    color: #e2c30a;
  }
`;
export const Infor = styled.div`
  padding-left: 40px;
  padding-top: 10px;

  h2 {
    font-size: 1.2rem;
  }

  .description {
    margin-top: 20px;

    span {
      display: block;
      font-weight: 900;
      margin-bottom: 2px;
    }

    p {
      line-height: 24px;
    }
  }
`;

export const Quantity = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 25px;
  margin-bottom: 35px;

  .actionButton {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: auto;

    height: 100%;
    padding: 6px 0;

    button {
      display: flex;
      align-items: center;
      flex: auto;
      border: 0;
      background: 0;
      padding: 0 15px;
      color: #00000090;
      outline: none;
      border-right: 1px solid #00000015;
    }
  }

  input {
    border-radius: 6px;
    border: 1px solid #00000030;
    background: #00000008;
    height: 50px;
    padding: 0 20px;
    width: 130px;
    text-align: right;
  }
`;

export const Price = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;

  span {
    font-size: 1rem;
    font-weight: 600;
  }

  .old {
    margin-right: 20px;
    text-decoration: line-through;
    opacity: 0.5;
  }

  .new {
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
export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;
  height: 60px;

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

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const MoreProduct = styled.div`
  margin-bottom: 60px;
`;
