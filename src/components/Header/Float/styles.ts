import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: none;
  background: #002357;

  .tag {
    display: none !important;
  }

  a + div {
    background: transparent;
  }

  nav ul li a {
    color: #ffffffdd;

    &:hover {
      background: transparent;
    }

    svg {
      transition: transform 0.2s;
    }
    &:hover svg {
      transform: translateY(6px) translateX(-50%);
      fill: #ffffffdd;
    }
  }

  &.fixedActive {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
  }
`;

export const WrapperHead = styled.div`
  background: #002357;
`;

export const HeadContent = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(169, 179, 194, 0.5);
  padding: 10px 0;

  a.logo img {
    width: 90px;
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
`;

export const HeadNav = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    position: relative;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      margin-right: 0;
    }
  }

  > div > a,
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

        &.act {
          background: #be0f0f;
          color: #ffffff;
        }
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

export const NavContent = styled.nav`
  > ul {
    display: flex;
    margin-bottom: 0;
    height: 100%;

    li {
      list-style: none;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        color: #002357;
        transition: background 0.2s;
        position: relative;

        &:hover svg {
          fill: #002357;
        }

        > svg {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 3px;
          height: 14px;
          width: auto;
          fill: #b1b1b1;
          transition: fill 0.2s;
        }

        &:hover {
          background: #d5d5d599;
        }

        &:hover > ul {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 1100px) {
          font-size: 0.8rem;
          padding: 0 7px;
        }

        > ul {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          z-index: 3;
          top: 100%;
          padding: 10px 0;
          background: #002357;
          left: 50%;
          width: 220px;
          transform: translateX(-50%);

          a {
            background: #002357;
            padding: 10px;
            color: #ffffff;
            display: block;
            text-align: center;
            font-size: 13px;
            transition: background 0.2s;

            &:hover {
              background: #053377;
            }
          }
        }
      }
    }
  }
`;
