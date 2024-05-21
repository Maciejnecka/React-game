import { mapConfig } from '../Map/MapConfig';

let playerPosition = { x: 0, y: 0 };

const isPositionOccupied = (position, entities) => {
  return entities.some(
    (entity) =>
      entity &&
      entity.position &&
      entity.position.x === position.x &&
      entity.position.y === position.y
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

const moveEnemies = (enemies) => {
  return enemies.map((enemy) => {
    if (Math.random() > 0.5) {
      const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      const direction =
        directions[Math.floor(Math.random() * directions.length)];
      let newPosition = { ...enemy.position };
      switch (direction) {
        case 'ArrowUp':
          if (enemy.position.y > 0) newPosition.y -= 1;
          break;
        case 'ArrowDown':
          if (enemy.position.y < mapConfig.height - 1) newPosition.y += 1;
          break;
        case 'ArrowLeft':
          if (enemy.position.x > 0) newPosition.x -= 1;
          break;
        case 'ArrowRight':
          if (enemy.position.x < mapConfig.width - 1) newPosition.x += 1;
          break;
        default:
          break;
      }

      if (
        !isPositionOccupied(newPosition, enemies) &&
        (newPosition.x !== playerPosition.x ||
          newPosition.y !== playerPosition.y)
      ) {
        enemy.position = newPosition;
      }
    }
    return enemy;
  });
};

export { movePlayer, getPlayerPosition, moveEnemies };
