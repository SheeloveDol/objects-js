// Property Assignments 
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Changing spaceship object's color from 'silver' to 'gold'
spaceship.color = 'gold';
console.log(spaceship); 

// If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.

// If there was no property with that name, a new property will be added to the object.


// You can delete a property from an object with the delete operator.
delete spaceship['Secret Mission'];
console.log(spaceship);
