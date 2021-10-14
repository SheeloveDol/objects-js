// const _ = {

//   clamp(number, lower, upper) {
//     var lowerClampedValue = Math.max(number, lower);
//     var clampedValue = Math.min(lowerClampedValue, upper);
//     return clampedValue;
//   },

//   inRange(number, start = 0, end = start) {
    
//     if (start > end) {
//       var temp = end;
//       end = start;
//       start = temp;
//     }
//     let isInRange = if (number < start || number > end) {
//       return false;
//     } else {
//       return true;
//     }
//     return isInRange;
//   }

// }

const string = 'hello'
console.log(Array.from(string))
console.log(' ');

const first = ['a', 'b'];
const second = ['c', 'd'];
const total = []
total.push(first, second);
console.log(total);
console.log(' ')

let space = '-  -'.repeat(3);
console.log(space);
console.log(' ')

const invert = (obj) => {
  let invertedObj = {};
  for (let key in obj) {
    let originalValue = obj[key];
    invertedObj[originalValue] = key;
  }
  return invertedObj;
}

const things = {'one': 1, 'two': 2, 'three': 3, 'four': 4}
console.log(invert(things))