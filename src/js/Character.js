const typeList = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      if (typeList.includes(type)) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
      } else {
        throw new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
      }
    } else {
      throw new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Здоровье персонажа =0. Нельзя повысить уровень умершего персонажа.');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
