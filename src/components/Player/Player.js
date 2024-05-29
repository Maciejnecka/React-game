import React from 'react';
import { PlayerStyled, PlayerName, PlayerHealth } from './Player.styled';

const Player = ({ position, health }) => {
  return (
    <PlayerStyled
      style={{ gridColumn: position.x + 1, gridRow: position.y + 1 }}
    >
      <PlayerName>Player</PlayerName>
      <PlayerHealth>{health}</PlayerHealth>
    </PlayerStyled>
  );
};

export default Player;
