const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

console.log(person.fullName);
console.log('')

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    // Checks that _energyLevel is a number
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robot.energyLevel)
console.log('')

// Setter Method example
const robot1 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

// Using setter method to assign new value to robot.numOfSensors
robot1.numOfSensors = 100;
console.log(robot1.numOfSensors)