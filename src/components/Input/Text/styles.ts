import styled, { css } from 'styled-components';

import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #04142d;
  border-radius: 10px;
  border: 2px solid #0b2956;
  padding: 16px;
  opacity: 0.9;
  color: #666360;
  justify-content: space-between;

  position: 'relative';
  z-index: 1;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #f91818;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #1872f9;
      border-color: #1872f9;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #1872f9;
    `}


  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: white !important;
  }

  svg {
    margin-right: 16px;
  }

`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  width: auto;

  svg {
    margin: 0;
  }

  span {
    text-align: center;
    background: #f91818;
    color: #fff;

    &::before {
      border-color: #f91818 transparent;
    }
  }
`;

export const Select = styled.select``;
