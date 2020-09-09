import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto 0;

  form {
    margin: 0;
    width: 640px;
    text-align: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    input {
      width: 300px;
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  margin-top: 45px;
  margin-left: 30px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e30;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const InforData = styled.div`
  margin-left: 33px;

  &::before {
    width: 40px;
    height: 1px;
    background: #c7c7c7;
    margin: 0 auto;
    margin-bottom: 20px;
    display: block;
    content: '';
  }

  > span {
    font-size: 14px;
    opacity: 0.8;
    font-style: italic;
    display: block;
  }
`;
