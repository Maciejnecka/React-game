import React from 'react';
import { EnemyStyled, EnemyName, EnemyHealth } from './Enemies.styled';

const Enemies = ({ enemies }) => {
  return (
    <>
      {enemies.map((enemy) => (
        <EnemyStyled
          key={enemy.id}
          style={{
            gridColumn: enemy.position.x + 1,
            gridRow: enemy.position.y + 1,
          }}
        >
          <EnemyName>{enemy.name}</EnemyName>
          <EnemyHealth>{enemy.health}</EnemyHealth>
        </EnemyStyled>
      ))}
    </>
  );
};

export default Enemies;
