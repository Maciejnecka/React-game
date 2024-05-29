import { playerStats } from '../Player/PlayerConfig';

const isAdjacent = (pos1, pos2) => {
  const dx = Math.abs(pos1.x - pos2.x);
  const dy = Math.abs(pos1.y - pos2.y);
  return dx + dy === 1;
};

const attackEnemy = (playerPosition, enemies, setEnemies, setPlayerHealth) => {
  const updatedEnemies = enemies
    .map((enemy) => {
      if (isAdjacent(playerPosition, enemy.position)) {
        let damage = playerStats.attack - enemy.stats.defense;
        if (damage < 0) damage = 0;
        enemy.health -= damage;
        console.log(`Attacked ${enemy.name} for ${damage} damage!`);

        if (enemy.health <= 0) {
          console.log(`${enemy.name} defeated!`);
          return null;
        } else {
          const counterAttackDamage = enemy.stats.attack - playerStats.defense;
          if (counterAttackDamage > 0) {
            setPlayerHealth((prevHealth) =>
              Math.max(prevHealth - counterAttackDamage, 0)
            );
          }
        }
      }
      return enemy;
    })
    .filter((enemy) => enemy !== null);

  setEnemies(updatedEnemies);
};

export { attackEnemy, playerStats };
