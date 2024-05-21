import styled from 'styled-components';
import { mapConfig } from './MapConfig';

export const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e0e0e0;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${mapConfig.width}, 1fr);
  grid-template-rows: repeat(${mapConfig.height}, 1fr);
  width: 100%;
  height: 100%;
`;

export const Cell = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
`;
