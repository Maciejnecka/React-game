import styled from 'styled-components';

export const EnemyStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const EnemyName = styled.div`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  font-size: 0.8rem;
  padding: 2px 4px;
  z-index: 1;
`;
