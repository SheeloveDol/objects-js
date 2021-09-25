const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice,
    };
    return this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const random = Math.floor(Math.random() * dishes.length);
     return dishes[random];
  },

  generateRandomMeal() {
    const appetizer =  this.getRandomDishFromCourse('appetizers');
    const main =  this.getRandomDishFromCourse('mains');
    const dessert =  this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your auto-generated meal is ${appetizer.name} with ${main.name} and ${dessert.name} for the total price of $${totalPrice}. Bon appetit!!`;
    }

}


// Adding dishes to courses using the .addDishToCourses() function
menu.addDishToCourse('appetizers', 'salad', 7.99);
menu.addDishToCourse('appetizers', 'mango', 4.99);
menu.addDishToCourse('appetizers', 'eggs', 3.99);

menu.addDishToCourse('mains', 'Burnt Chicken', 16.99);
menu.addDishToCourse('mains', 'Roasted Duck', 23.99);
menu.addDishToCourse('mains', 'Calderetta', 31.99);

menu.addDishToCourse('desserts', 'creme brule', 10.99);
menu.addDishToCourse('desserts', 'marquis au chocolat', 14.99);
menu.addDishToCourse('desserts', 'fruit cake', 6.99);


const meal = menu.generateRandomMeal();
console.log(meal
)