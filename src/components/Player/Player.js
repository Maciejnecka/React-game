import React from 'react';
import { PlayerStyled } from './Player.styled';

const Player = ({ position }) => {
  return (
    <PlayerStyled
      style={{ gridColumn: position.x + 1, gridRow: position.y + 1 }}
    />
  );
};

export default Player;
