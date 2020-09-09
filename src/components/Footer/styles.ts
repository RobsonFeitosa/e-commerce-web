import styled from 'styled-components';

export const Container = styled.footer`
  background: #292929;

  margin-top: 30px;

  .footerutils {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px 0;
  }

  li {
    list-style: none;
  }
`;

export const FooterUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2.6rem;
  padding-bottom: 20px;

  border-bottom: 1px solid #f8f8f820;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: 1270px) {
      .logoFooter {
        margin-right: 10px;
      }
    }
    nav {
    }
    nav ul {
      display: flex;
    }
    nav ul li {
      list-style: none;

      &::before {
        content: '-';
        margin: 0 30px;
        color: #ffffffcc;

        @media (max-width: 1270px) {
          margin: 0px 13px;
        }
      }

      &:first-child:before {
        content: '';
      }
    }
    nav ul li a {
      text-decoration: none;
      color: #ffffffcc;
      transition: color 0.2s;

      &:hover {
        color: #e2c30a;
      }
    }
  }
  .paymentform {
    width: 230px;
    height: auto;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
  padding: 10px 0;

  border-bottom: 1px solid #f8f8f820;

  > div > span {
    display: block;
    margin-bottom: 15px;
    transition: transform 0.2s;

    color: #ffffffcc;
    text-transform: uppercase;
    font-weight: 900;
  }

  li {
    margin-bottom: 8px;

    color: #ffffff80;

    &:last-child {
      margin-bottom: 0;
    }
  }

  svg {
    font-size: 5px;
    margin-right: 8px;
  }

  a {
    display: flex;
    align-items: center;

    color: #ffffff80;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #e2c30a;
    }
  }

  .contact {
    li {
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 20px;
    }
    svg {
      font-size: 20px;
    }
  }
`;

export const Newsletter = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-right: 30px;

    color: #ffffffcc;
    text-transform: uppercase;
    font-weight: 900;
  }

  form {
    display: flex;
    justify-content: center;
    opacity: 0.8;

    input {
      height: 50px;
      width: 350px;
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

      color: rgba(255, 255, 255, 8);
      transition: color 0.2s;
      background: #e2c30a;
      border: 0;
      border-radius: 0 5px 5px 0;
      width: 50px;

      &:hover {
        color: #806e09;
      }
    }
  }
`;

export const Followus = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  > span {
    margin-right: 30px;

    color: #ffffffcc;
    text-transform: uppercase;
    font-weight: 900;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 15px;

      a {
        display: flex;
        font-size: 44px;

        &.facebook {
          color: #0b76c8;
        }

        &.instagram {
          color: #b850c8;
        }

        &.youtube {
          color: #c80202;
        }
      }
    }
  }
`;

export const FooterCredits = styled.div`
  background: #141414;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px;

  span {
    color: #ffffff90;
  }
`;
