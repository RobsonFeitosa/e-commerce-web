import styled, { css } from 'styled-components';

interface ContainerProps {
  type: 'done' | 'cancel' | 'onroute';
}

const orderTypeVariations = {
  done: css`
    border-color: #28cc5690;

    .header {
      > span {
        a {
          color: #36b159;
        }
      }
    }
  `,
  cancel: css`
    border-color: #be0f0f90;

    .header {
      > span {
        a {
          color: #be0f0f;
        }
      }
    }
  `,
  onroute: css`
    border-color: #e9a11790;

    .header {
      > span {
        a {
          color: #e9a117;
        }
      }
    }
  `,
};

export const Container = styled.div`
  padding-left: 15px;
`;

export const ListOrders = styled.ul`
  margin: 0;
  padding: 0;
`;
export const ItemOrder = styled.li<ContainerProps>`
  list-style: none;
  border-left: 4px solid #c7c7c7;
  padding: 15px;
  padding-left: 30px;
  padding-right: 20px;
  background: #f6f6f655;

  margin-bottom: 20px;

  .header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #c7c7c766;

    > span {
      a {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #353535;
        text-decoration: none;

        svg {
          margin-right: 15px;
        }
      }

      strong {
        font-weight: 900;
        margin-left: 6px;
      }
    }
  }

  ${(props) => orderTypeVariations[props.type]}
`;

export const Order = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Description = styled.div``;
