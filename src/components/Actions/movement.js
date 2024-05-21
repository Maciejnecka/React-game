import { mapConfig } from '../Map/config';

let playerPosition = { x: 0, y: 0 };

const movePlayer = (direction) => {
  switch (direction) {
    case 'ArrowUp':
      if (playerPosition.y > 0) playerPosition.y -= 1;
      break;
    case 'ArrowDown':
      if (playerPosition.y < mapConfig.height - 1) playerPosition.y += 1;
      break;
    case 'ArrowLeft':
      if (playerPosition.x > 0) playerPosition.x -= 1;
      break;
    case 'ArrowRight':
      if (playerPosition.x < mapConfig.width - 1) playerPosition.x += 1;
      break;
    default:
      break;
  }
};

const getPlayerPosition = () => playerPosition;

export { movePlayer, getPlayerPosition };
