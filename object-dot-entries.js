// The goal is to get really familiar with accessing key and value pairs inside and object

let emptyHouse = [];
let emptyTransport = [];

//creating an object
const house = {
  doors: 4,
  windows: 6,
  color: 'lightg-gray',
  stories: 3
}

// Printing 'house' object
console.log(house);
//******************Line Skip
console.log('');

// Returning an [array] of key-value pairs from {house} object and putting the result inside [emptyHouse] array
for (let [key,value] of Object.entries(house)) {
  emptyHouse.push(`${key}: ${value}`)
}
console.log(emptyHouse)


//****************** */ Line Skip
console.log('');

// Creating a nested object
const transportation = {

  motorcycles: {
    brand: 'Kawasaki',
    displacement: 636
  },
  
  car: {
    make: 'Honda',
    model: 'Prelude',
    cylinder: 6
  }
}

// Printing 'transportation' object
console.log(transportation);
// The above returns an 'object'

//******************* */ Line Skip
console.log('');

// Going to now return an [array] with the key-value pairs
for (let [key, value] of Object.entries(transportation.motorcycles)) {
  emptyTransport.push(`${key}: ${value}`);
}

console.log(emptyTransport)