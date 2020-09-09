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
  padding: 8px 16px;
  opacity: 0.9;
  color: #666360;
  min-height: 57px;
  position: relative;
  justify-content: space-between;

  position: 'relative';
  z-index: 3;

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


  select,
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }

`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  right: 69px;
  z-index: 2;

  svg {
    margin: 0;
  }

  span {
    background: #f91818;
    color: #fff;

    &::before {
      border-color: #f91818 transparent;
    }
  }
`;

export const Select = styled.select``;
