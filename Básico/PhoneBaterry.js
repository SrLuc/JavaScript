class Phone {
  constructor(batteryLevel, light, power, name) {
    this.batteryLevel = batteryLevel;
    this.light = light;
    this.power = power;
    this.name = name;
  }

  charger(level) {
    this.batteryLevel += level;
  }

  iluminate(intensity){
     this.light = intensity
  }

  powered(status){
     this.power = status;
  }

}


const samsumg = new Phone(5);
samsumg.charger(5);
samsumg.iluminate(0);
samsumg.powered(true);
samsumg.name = 'Samsung A20';
console.log(samsumg);

if(Phone.prototype.batteryLevel <= 15){
     console.log(Phone + ' Need Charger');
}



const iphone = new Phone(10);
iphone.charger(0);
iphone.iluminate(4);
iphone.powered(true);
samsumg.name = " Iphone 14 - Prox-Max"
//console.log(iphone);

const xiome = new Phone(100);
xiome.powered(true);
//console.log(xiome);




