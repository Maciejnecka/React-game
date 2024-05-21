import React from 'react';
import { PlayerStyled, PlayerName } from './Player.styled';

const Player = ({ position }) => {
  return (
    <PlayerStyled
      style={{ gridColumn: position.x + 1, gridRow: position.y + 1 }}
    >
      <PlayerName>Player</PlayerName>
    </PlayerStyled>
  );
};

export default Player;
