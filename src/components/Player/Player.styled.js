import styled from 'styled-components';

export const PlayerStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PlayerName = styled.div`
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  color: blue;
  font-size: 0.8rem;
  padding: 2px 4px;
  z-index: 1;
`;
