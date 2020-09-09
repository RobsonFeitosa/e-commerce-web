import styled from 'styled-components';

export const Container = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;

  .set2-20right {
    display: flex;

    .group {
      &:last-child {
        width: 50%;
        margin-left: 20px;
      }
    }
  }

  .set2-50right {
    display: flex;

    .group {
      &:last-child {
        width: 100%;
        margin-left: 20px;
      }
    }
  }
  .group {
    width: 100%;
    margin-bottom: 20px;

    > span {
      margin-bottom: 6px;
      display: block;
    }
  }
`;

export const AddressRep = styled.div`
  border: 1px solid #c7c7c7;
  width: 48%;
  float: left;
  margin-bottom: 20px;
  min-height: 253px;

  &:nth-child(odd) {
    margin-right: 20px;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #c7c7c7;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.selected {
    background: #be0f0f;
    color: #fff;
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 22px;
  }

  > div {
    display: flex;
    cursor: pointer;

    svg {
      margin-left: 10px;
    }
  }
`;

export const Content = styled.div`
  padding: 10px 20px;

  p {
    margin-bottom: 0;
  }
`;

export const SelectPrimary = styled.div`
  padding: 10px 20px;
  border-top: 1px solid #c7c7c7;

  input {
    margin-right: 10px;
  }

  button {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }

    &:disabled {
      opacity: 0.4;
    }
  }
`;

export const Btn = styled.div``;

export const CreateNewAddress = styled.button`
  width: 48%;
  border: 3px dotted #c7c7c7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  font-size: 20px;
  color: #002357;
  font-weight: 600;
  min-height: 253px;

  &:hover {
    color: #be0f0f;
  }

  svg {
    margin-bottom: 10px;
  }
`;
