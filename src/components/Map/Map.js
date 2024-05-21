import React, { useEffect, useState } from 'react';
import { MapContainer, Grid, Cell } from './Map.styled';
import Player from '../Player';
import { movePlayer, getPlayerPosition } from '../Actions/movement';
import { mapConfig } from './config';

const Map = () => {
  const [position, setPosition] = useState(getPlayerPosition());

  useEffect(() => {
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
      </Grid>
    </MapContainer>
  );
};

export default Map;
