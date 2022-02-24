class  FareightСar{
  constructor(volume, type, cargo){
    this.volume = volume + ' m^3';
    this.type = type;
    this.cargo = cargo;
  }

  toUnload(){
    this.cargo = null;
  }
  toDownload(newCargo){
    if(this.cargo !== undefined){    
      throw Error ('your Fareight car is already full')
    }
    this.cargo = newCargo;    
  }
}

const newFareightCar = new FareightСar(50, 'open', 'sand');
console.log(newFareightCar);
////

class Locomotive{
  constructor(maxSeat, people, typeEngine, powerEngine, isRunning){
    this.maxSeat = maxSeat;
    this.people = people;
    this.typeEngine = typeEngine;
    this.powerEngine = powerEngine;
    this.isRunning = isRunning;
  }

  launch(){
    if(this.people === undefined){
      throw Error('people is not enough');
    }
    console.log('lets go');
  }

  newPassenger(n){
    if(this.maxSeat === this.people || n > (this.maxSeat - this.people)){
      throw Error('seats is not enough')
    }
    const res = this.people += n
    return res;
  }
}

const newLocomotive = new Locomotive (10,6, 'dfd', 345, true);
console.log(newLocomotive);

newLocomotive.newPassenger(3)
console.log(newLocomotive);
////

class Train{
  constructor(trains){
    this.trains = trains;
    this.loco = newLocomotive;
    this.speed = 0;
  }

  speedUp(){
    if(newLocomotive.isRunning === false){
      throw Error('motor is not running')
    } 
    for(let i = 0; i < 20; i++){
      this.speed += i;
      console.log(this.speed);
    }
  }

  speedDown(){
    if(newLocomotive.isRunning === false){
      throw Error('motor is not running')
    } 
    for(let i = 0; i < 20; i++){
      this.speed -= i;
      console.log(this.speed);
    }
  }

  stop(){
    if(this.speed > 10){
      throw Error('too fast');
    }
    console.log('stop');
  }

  addTrain(){
    this.trains.push('newTrain');
  }

  forEach(){
    this.trains.forEach(v => console.log(v));
  }
}

const arrTrains = ['train1', 'train2', 'train3']
const newTrain = new Train(arrTrains);
console.log((newTrain));

newTrain.speedUp()
newTrain.speedDown()
newTrain.stop()
newTrain.addTrain()
newTrain.forEach()