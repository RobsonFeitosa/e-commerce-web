import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 4rem;
`;
export const Header = styled.header`
  display: block;
  margin-bottom: 20px;
  padding: 0 10px;

  > div {
    display: block;
    text-align: center;
  }

  span {
    font-size: 20px;
    opacity: 0.8;
    margin-bottom: 10px;
    display: block;

    strong {
      font-weight: 900;
    }
  }

  .navGallery {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    margin-bottom: 20px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 160px;
      height: 38px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }

      background: #e2c30a;
      color: #353535aa;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }

    a.active {
      background: #002357;
      color: #fff;
    }
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column-reverse;

  .carousel-button-group {
    padding: 0 10px;

    > div {
      position: relative;
      display: flex;
      justify-content: center;

      margin-bottom: 20px;

      border-bottom: 1px solid #c9c9c940;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8f8f8;
        border: 0;
        width: 43px;
        height: 43px;
        margin-left: 10px;
        transition: opacity 0.2s;

        &:first-child {
          margin-left: 0;
        }

        > svg {
          color: #00235750;
          font-size: 24px;
        }
      }

      .disable {
        opacity: 0.4;
      }
    }
  }
  .carousel-item-padding-40-px {
    padding: 0 10px;

    > div > div {
      margin-bottom: 40px;
    }
  }
`;
