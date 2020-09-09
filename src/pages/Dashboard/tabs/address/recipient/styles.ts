import styled from 'styled-components';

export const Container = styled.div`
  max-width: 520px;
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

export const ContentResult = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;

  span {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const BackTo = styled.button`
  display: flex;
  align-items: center;
  background: 0;
  border: 0;
  outline: 'none';
`;
