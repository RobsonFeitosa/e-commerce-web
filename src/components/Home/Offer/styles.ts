import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;
export const HeadOffer = styled.div`
  margin-top: 27px;

  background: rgb(236, 236, 236);
  background: linear-gradient(
    169deg,
    rgba(236, 236, 236, 1) 0%,
    rgba(251, 251, 251, 1) 71%
  );
  text-align: center;

  padding: 36px 0;

  h2 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 28px;
    color: #be0f0f;
    font-weight: 900;

    &::after {
      content: '';
      width: 80px;
      height: 1px;
      margin-top: 10px;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;

      background: #c7c7c7;
      display: inline-block;
    }
  }

  p {
    display: block;
    width: 400px;
    margin: 0 auto;

    font-size: 18px;
    color: #002357;
    font-weight: 600;
  }
`;
export const Timer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 18px;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 10px;

    span {
      display: block;
      margin-bottom: 4px;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 600;
      color: #00235780;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 70px;
      width: 70px;

      background: #a9b3c260;
      font-size: 22px;
      color: #002357;
      font-weight: 900;
    }
  }
`;
export const FooterOff = styled.div`
  position: relative;

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
  }

  .price {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    width: 280px;
    height: 132px;
    padding-top: 24px;
    padding-left: 40px;

    background: #ffffff9e;

    .oldPrice {
      text-decoration: line-through;
      font-size: 18px;
      font-weight: 600;
      color: #5e5e5e;
    }

    .newPrice {
      font-size: 24px;
      font-weight: bold;
      color: #be0f0f;
    }
  }
`;
