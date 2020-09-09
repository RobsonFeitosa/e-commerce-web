import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const HeaderAccount = styled.div`
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #002357;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;

  .lineVertical {
    border-left: 1px solid #c7c7c7;
    margin-left: 34px;
    margin-right: 34px;
  }
`;

export const LeftSideBar = styled.div`
  width: 25%;
`;

export const NavAccount = styled.div`
  margin-bottom: 40px;

  ul {
    padding-left: 0;

    button,
    li {
      list-style: none;
      margin-bottom: 20px;

      font-size: 20px;
      color: #353535;
      text-decoration: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      border: 0;
      background: transparent;

      &.selected {
        color: #be0f0f;
      }

      &:hover svg {
        transform: rotateY(190deg);
      }

      svg {
        transition: transform 0.4s;
        margin-right: 20px;
        font-size: 28px;
      }
    }
  }
`;

export const OptNavHelper = styled.div`
  display: block;
  margin-top: 30px;

  a {
    display: flex;
    align-items: center;

    padding: 30px 0;
    padding-left: 31px;
    border-radius: 5px;

    margin-bottom: 20px;

    text-align: left;
    background-color: #002357;
    color: #ffffff;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;

    svg {
      margin-right: 20px;
    }
  }
`;

export const RightSiderBar = styled.div`
  width: 75%;
`;
