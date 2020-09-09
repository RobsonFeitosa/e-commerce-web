import styled from 'styled-components';

import imgTemp from '../../../assets/temp/special-call.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 431px;
  margin-top: 3rem;

  background: url(${imgTemp}) #c7c7c7 no-repeat center;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #00000040;
  }

  > div {
    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lineSeparator {
    width: 140px;
    height: 1px;
    background: #ffffff;
    margin: 0 80px;
  }

  p {
    max-width: 600px;

    color: #ffffff;
    font-size: 18px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  line-height: 3.5rem;

  span {
    font-family: 'Pinyon Script';
    font-size: 38px;
  }

  strong {
    text-transform: uppercase;
    font-size: 38px;
    font-weight: 900;
    margin-left: 60px;
  }
`;
