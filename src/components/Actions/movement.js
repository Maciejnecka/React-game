import { mapConfig } from '../Map/MapConfig';

let playerPosition = { x: 0, y: 0 };

const isPositionOccupied = (position, enemies) => {
  return enemies.some(
    (enemy) =>
      enemy.position.x === position.x && enemy.position.y === position.y
  );
};

const movePlayer = (direction, enemies) => {
  let newPosition = { ...playerPosition };
  switch (direction) {
    case 'ArrowUp':
      if (playerPosition.y > 0) newPosition.y -= 1;
      break;
    case 'ArrowDown':
      if (playerPosition.y < mapConfig.height - 1) newPosition.y += 1;
      break;
    case 'ArrowLeft':
      if (playerPosition.x > 0) newPosition.x -= 1;
      break;
    case 'ArrowRight':
      if (playerPosition.x < mapConfig.width - 1) newPosition.x += 1;
      break;
    default:
      break;
  }

  if (!isPositionOccupied(newPosition, enemies)) {
    playerPosition = newPosition;
  }
};

const getPlayerPosition = () => playerPosition;

export { movePlayer, getPlayerPosition };
