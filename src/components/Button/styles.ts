import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #be0f0f;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#be0f0f')};
  }
`;
