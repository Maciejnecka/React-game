import styled from 'styled-components';

export const PlayerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerName = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  color: blue;
  font-size: 0.8rem;
  padding: 2px 4px;
  z-index: 1;
`;

export const PlayerHealth = styled.div`
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
