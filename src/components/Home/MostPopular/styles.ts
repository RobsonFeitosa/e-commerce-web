import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 2rem;
  margin-bottom: 2rem;

  header {
    display: block;
    margin-bottom: 20px;
    padding: 0 10px;

    > div {
      display: block;
      border-bottom: 1px solid #c9c9c940;
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
  }

  .carousel-item-padding-40-px {
    padding: 0 10px;
  }

  .carousel-button-group {
    position: absolute;
    right: 40px;
    top: 0px;
    display: flex;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8f8f8;
      border: 0;
      width: 43px;
      height: 43px;
      margin-left: 10px;
      transition: opacity 0.2s;

      > svg {
        color: #00235750;
        font-size: 24px;
      }
    }

    .disable {
      opacity: 0.4;
    }
  }
`;
