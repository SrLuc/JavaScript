class Phone {
  constructor(model, batteryLevel) {
    this.model = model;
    this.batteryLevel = batteryLevel;
    this.ligth = 0;
    this.power = true;
  }

  toCharge(points, on) {
    this.batteryLevel += points;
    this.power = on;
    on == true
      ? console.log(this.model + " device charging")
      : console.log("device is not turned on");

    if (this.batteryLevel == 100) {
      console.log("full charge");
    }

    if (this.batteryLevel <= 15) {
      console.log("device discharging");
    }
  }

  illuminate(level) {
    this.ligth = level;
    if (this.ligth == 1) {
      console.log("Light level 1");
    } else if (this.ligth == 2) {
      console.log("Light level 2");
    } else if (this.ligth == 3) {
      console.log("Light level 3");
    } else if (this.ligth == 4) {
      console.log("Light level 4");
    } else if (this.ligth == 5 && this.batteryLevel <= 15) {
      console.log("Light level 5 - Please turn off the flashlight");
    } else {
      console.log("flashlight off");
    }
  }

  powerOn(status) {
    this.power = status;
    status == true ? console.log("powerOn") : console.log("powerOFF");
  }
}

const iphone = new Phone("14 ProMax", 10);
iphone.toCharge(2, false);
iphone.illuminate(5);
iphone.powerOn(false);

console.log("");

const samsumg = new Phone("Samsumg A25", 69);
samsumg.toCharge(20, true);
samsumg.illuminate(0);
samsumg.powerOn(true);
