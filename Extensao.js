class Human {
     constructor(name, weapon){
          this.name = name;
          this.weapon = weapon;
     }

     attack(){
          console.log('Cut');
     }
}

class Wizard extends Human{
     attack(){
          super.attack();
          console.log('Tix');
     }
}

/* const warrior = new Human('Azelft', 'Caladbolg');
warrior.attack(); */

const mage = new Wizard('Alvo', 'Divine Staff');
mage.attack();