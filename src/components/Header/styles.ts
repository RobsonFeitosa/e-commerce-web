import styled from 'styled-components';

export const Container = styled.header``;

export const WrapperHead = styled.div`
  background: #002357;
`;

export const HeadUp = styled.div`
  display: flex;

  @media (max-width: 1270px) {
    &.container {
      padding: 0;
    }
  }

  > div {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-left: 1px solid rgba(169, 179, 194, 0.5);
  }

  > div > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  span {
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;

    @media (max-width: 1100px) {
      font-size: 9px;
    }
  }

  span > a {
    font-weight: 900;
    text-decoration: none;
    color: #b4a319;
    margin-left: 8px;
    transition: color 0.2s;

    &:hover {
      color: #e2cd1e;
    }
  }

  svg {
    color: #b4a319;
    margin-right: 10px;
  }

  .whatsbox {
    svg {
      color: #fff;

      @media (max-width: 1100px) {
        margin-right: 0;
      }
    }

    a {
      flex: auto;
      height: 100%;
      background: #19a74e;
      transition: background 0.2s;

      &:hover {
        background: #20b357;
      }
    }

    span {
      font-weight: 900;
      color: rgba(255, 255, 255, 0.9);

      @media (max-width: 1100px) {
        display: none;
      }
    }
  }
`;

export const HeadContent = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(169, 179, 194, 0.5);
  padding: 20px 0;

  a.logo img {
    width: 200px;
    height: auto;

    @media (max-width: 1270px) {
      width: 150px;
    }

    @media (max-width: 1380px) {
      width: 210px;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form {
    flex: 1;
    display: flex;
    justify-content: center;
    opacity: 0.8;

    @media (max-width: 1100px) {
      margin: 0 20px;
    }

    input {
      height: 50px;
      width: 100%;
      max-width: 350px;
      padding: 0 20px;
      border-radius: 5px 0 0 5px;
      border: 0;

      background: #b7d4ff20;
      color: #fff;

      &::placeholder {
        color: #ffffff80;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      color: rgba(255, 255, 255, 0.5);
      border: 0;
      border-radius: 0 5px 5px 0;
      width: 50px;
      background: rgba(117, 117, 117, 0.25);
    }
  }
`;

export const HeadNav = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:last-child {
      margin-right: 0;
    }
  }

  > div a,
  > div .cart-wp {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    text-decoration: none;

    svg {
      margin-left: 10px;
      color: #e2c30a;

      @media (max-width: 1100px) {
        font-size: 9px;
      }
    }

    .notification {
      display: flex;
      position: relative;
      z-index: 1;

      .count {
        position: absolute;
        right: -4px;
        top: -6px;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;

        border-radius: 50%;
        background: #f8f8f8;
        font-size: 12px;
        color: #002357;
        border: 1px solid #002357;
        transition: all ease-in-out 0.2s;
      }
    }

    .avatar img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #ffffff44;
      margin-left: 10px;
    }

    > .account {
      flex-direction: column;
      display: flex;
      text-align: right;

      small {
        display: block;
        line-height: 11px;
        font-size: 11px;
        color: #e2c30a;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.9);
      text-transform: uppercase;
      transition: color 0.2s;

      @media (max-width: 1100px) {
        font-size: 13px;
      }
    }

    &:hover span {
      color: #e2c30a;
    }
  }
`;
