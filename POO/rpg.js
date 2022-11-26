class Char {
    constructor(type) {
        this.type = type;
        this.health = 100;
        this.damage = 5;
    }

    move(direction) {
        this.direction = direction;
        console.log('the ' + this.type + ' moving to ' + this.direction);
    }

    eat(food) {
        this.food = food;
        console.log('the ' + this.type + ' eating the ' + this.food);
    }

}

class Wizard extends Char {
    constructor(type, weapon) {
        super(type);
        this.weapon = weapon;
        this.damage = 20;
        this.health = 50;
    }

    eat(food) {
        this.food = food;
        console.log('the ' + this.type + ' using ' + this.food);
    }
}


class Warrior extends Char {
    constructor(type, weapon) {
        super(type);
        this.weapon = weapon;
        this.damage = 35;
        this.armor = 40;
        this.health += this.armor;
    }

}

const char1 = new Char('Human');

const char2 = new Wizard('Mage', 'Staff');

const char3 = new Warrior('Beserk', 'Axe');

const char4 = new Wizard('Necromancer', 'Undeads');

const char5 = new Warrior('Fighter', 'Hands');

const char6 = new Wizard('Druid', 'Polimorf');







