class ElectricalAppliances {
  constructor(name) {
    this.object = 'Electrical appliance';
    this.name = name;
  }

  getPowerConsumption (power, time, connect) {
    let turnOn = connect;
    if(connect === 1){
      turnOn = 'Вкл';
    }else{
      turnOn = 'Выкл';
    }


    console.log(`Потребляемая мощность ${this.name} за ${time} час. = ${power * time}Вт. ${this.name}: ${turnOn}`);
  }

}

class Characteristic extends ElectricalAppliances {
  constructor (name, color, properties) {
    super(name);
      this.color = color;
        this.properties = properties
  }
}

const computer = new Characteristic ('Computer', 'black', 'GTX1060');
const deskLamp = new Characteristic ('Desk Lamp', 'blue', 'LED');
const electricKettle = new Characteristic('Electric kettle', 'multicolor', 'glassware')
let sumEnergyConsumption = 0;

function calculatePowerConsumption (electricalAppliances, power, time, connect) {
  for (let i = 0; i < electricalAppliances.length; i++) {
    electricalAppliances[i] .getPowerConsumption(power[i], time[i], connect[i]);
    if (connect[i] === 1) {
      sumEnergyConsumption+=power[i]*time[i];
    }
  }
  console.log('Общее потребление вкл приборов = ' + sumEnergyConsumption + 'Вт')
}

console.log(computer, deskLamp, electricKettle);
calculatePowerConsumption([computer, deskLamp, electricKettle], [66, 40, 2000],
  [3, 4, 0.05], [1, 1, 0]);
