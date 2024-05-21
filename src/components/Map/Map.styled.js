import styled from 'styled-components';

export const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e0e0e0;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(25, 1fr);
  width: 100%;
  height: 100%;
`;

export const Cell = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
`;
