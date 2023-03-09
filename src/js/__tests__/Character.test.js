import Daemon from '../Daemon';

test('creat new right player', () => {
  const player = new Daemon('leo', 'Daemon');
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('creat new player with a short name', () => {
  function createPlayer() {
    return new Daemon('l', 'Daemon');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a long name', () => {
  function createPlayer() {
    return new Daemon('leonardo2023', 'Daemon');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a not correct type', () => {
  function createPlayer() {
    return new Daemon('leo', 'Daem');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.'));
});

test('testing function levelUp (health > 0)', () => {
  const player = new Daemon('leo', 'Daemon');
  player.health = 50;
  player.levelUp();
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('testing function levelUp (health <= 0)', () => {
  const player = new Daemon('leo', 'Daemon');
  player.health = 0;
  function levelUpPlayer() {
    player.levelUp();
  }
  expect(levelUpPlayer).toThrow(new Error('Здоровье персонажа =0. Нельзя повысить уровень умершего персонажа.'));
});

test('testing function damage (health < 0)', () => {
  const player = new Daemon('leo', 'Daemon');
  player.health = -5;
  player.damage(15);
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: -5,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('testing function damage (health >= 0)', () => {
  const player = new Daemon('leo', 'Daemon');
  player.health = 50;
  player.damage(15);
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 41,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
