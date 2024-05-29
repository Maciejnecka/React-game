import styled from 'styled-components';

export const EnemyStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnemyName = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  color: red;
  font-size: 0.8rem;
  padding: 2px 4px;
  z-index: 1;
`;

export const EnemyHealth = styled.div`
  position: absolute;
  top: -95%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
`;
