import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  background: rgb(170, 170, 170);
  background: linear-gradient(
    139deg,
    rgba(170, 170, 170, 0.6) 0%,
    rgba(213, 213, 213, 0.4) 72%
  );

  > div {
    height: 100%;

    display: flex;
    justify-content: space-between;

    .tag {
      display: flex;
      align-items: center;

      color: #6d6969;

      @media (max-width: 1100px) {
        font-size: 0.8rem;
      }

      svg {
        margin-right: 8px;
        color: #be0f0f;
      }

      strong {
        margin-left: 6px;
        font-weight: 900;
      }
    }
  }
`;

export const NavContent = styled.nav`
  > ul {
    display: flex;
    margin-bottom: 0;
    height: 100%;

    li {
      list-style: none;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        color: #002357;
        transition: background 0.2s;
        position: relative;

        &:hover svg {
          fill: #002357;
        }

        > svg {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 3px;
          height: 14px;
          width: auto;
          fill: #b1b1b1;
          transition: fill 0.2s;
        }

        &:hover {
          background: #d5d5d599;
        }

        &:hover > ul {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 1100px) {
          font-size: 0.8rem;
          padding: 0 7px;
        }

        > ul {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          z-index: 3;
          top: 100%;
          padding: 10px 0;
          background: #002357;
          left: 50%;
          width: 220px;
          transform: translateX(-50%);

          a {
            background: #002357;
            padding: 10px;
            color: #ffffff;
            display: block;
            text-align: center;
            font-size: 13px;
            transition: background 0.2s;

            &:hover {
              background: #053377;
            }
          }
        }
      }
    }
  }
`;
