const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses() {
    for (const [key, value] of Object.entries(menu._courses)) {
      return `${key}: ${value}`;
    }
  },

  get appetizers() {

  },

  set appetizers(appetizersIn) {

  },
  
  get mains() {

  },
  
  set mains(mainsIn) {

  },

  get desserts() {

  },
  set desserts(dessertsIn) {

  },

  addDishToCourse(courseName, dishName, dishPrice) {

  }

}
