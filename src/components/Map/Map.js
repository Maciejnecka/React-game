import React, { useEffect, useState } from 'react';
import { MapContainer, Grid, Cell } from './Map.styled';
import Player from '../Player';
import Enemies from '../Enemies';
import {
  movePlayer,
  getPlayerPosition,
  moveEnemies,
} from '../Actions/movement';
import { attackEnemy } from '../Actions/attack';
import { mapConfig } from './MapConfig';
import { enemiesConfig } from '../Enemies/EnemiesConfig';
import { playerStats } from '../Player/PlayerConfig';

const generateRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * mapConfig.width),
    y: Math.floor(Math.random() * mapConfig.height),
  };
};

const generateEnemies = () => {
  return Array.from({ length: enemiesConfig.numberOfEnemies }, (_, index) => {
    const type =
      enemiesConfig.types[
        Math.floor(Math.random() * enemiesConfig.types.length)
      ];
    const position = generateRandomPosition();
    return { ...type, position, id: index };
  });
};

const Map = () => {
  const [position, setPosition] = useState(getPlayerPosition());
  const [enemies, setEnemies] = useState([]);
  const [playerHealth, setPlayerHealth] = useState(playerStats.health);

  useEffect(() => {
    setEnemies(generateEnemies());
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
      ) {
        movePlayer(event.key, enemies);
        setPosition({ ...getPlayerPosition() });
        setEnemies(moveEnemies(enemies));
      }
      if (event.key === ' ') {
        attackEnemy(position, enemies, setEnemies, setPlayerHealth);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position, enemies]);

  useEffect(() => {
    if (playerHealth <= 0) {
      alert('Game Over! The player has died.');
    }
  }, [playerHealth]);

  const cells = [];
  for (let row = 0; row < mapConfig.height; row++) {
    for (let col = 0; col < mapConfig.width; col++) {
      cells.push(<Cell key={`${row}-${col}`} />);
    }
  }

  return (
    <MapContainer>
      <Grid>
        {cells}
        <Player position={position} health={playerHealth} />
        <Enemies enemies={enemies} />
      </Grid>
    </MapContainer>
  );
};

export default Map;
