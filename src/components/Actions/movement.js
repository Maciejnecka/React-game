let playerPosition = { x: 0, y: 0 };

const movePlayer = (direction) => {
  switch (direction) {
    case 'ArrowUp':
      if (playerPosition.y > 0) playerPosition.y -= 1;
      break;
    case 'ArrowDown':
      if (playerPosition.y < 24) playerPosition.y += 1;
      break;
    case 'ArrowLeft':
      if (playerPosition.x > 0) playerPosition.x -= 1;
      break;
    case 'ArrowRight':
      if (playerPosition.x < 24) playerPosition.x += 1;
      break;
    default:
      break;
  }
};

const getPlayerPosition = () => playerPosition;

export { movePlayer, getPlayerPosition };
