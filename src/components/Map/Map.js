import React, { useEffect, useState } from 'react';
import { MapContainer, Grid, Cell } from './Map.styled';
import Player from '../Player';
import Enemies from '../Enemies';
import { movePlayer, getPlayerPosition } from '../Actions/movement';
import { mapConfig } from './MapConfig';
import { enemiesConfig } from '../Enemies';

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

  useEffect(() => {
    setEnemies(generateEnemies());

    const handleKeyDown = (event) => {
      if (
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
      ) {
        movePlayer(event.key);
        setPosition({ ...getPlayerPosition() });
      }
      if (event.key === ' ') {
        // logika interakcji
        console.log('Interaction triggered');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
        <Player position={position} />
        <Enemies enemies={enemies} />
      </Grid>
    </MapContainer>
  );
};

export default Map;
