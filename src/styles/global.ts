import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ffffff;
    color: #353535;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    outline: none;

    &:focus {
      border: 0;
      outline: none;
    }
  }

  .flex {
    display: flex;
  }

  .flexCenterBetween {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flexBetween {
    display: flex;
    justify-content: space-between;
  }

  .flexCenter {
    display: flex;
    justify-content: center;
  }

  .flexCenterAll {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    position: relative;
    width: 100%;
    max-width: 1380px;

    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
  }

  .guild-row {
    display: flex;

    > div {
      padding: 0 10px;
      width: 100%;

      &:first-child{
        padding-left: 0;
      }

      &:last-child{
        padding-right: 0;
      }
    }
  }

  .r2 {
    > div {
      width: 50%;
      position: relative;
    }
  }

  .wrapper-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
