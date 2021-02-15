/**
 * practice assignment: create an object
 * 1. give each object an identifiable name
 * 2. create properties to describe the objects and set their values
 * 3. find an object that has another object inside of it to create a nested object
 * 4. test your objects int he browser console by accessing the entire object and its specific properties
 */

const cabinet = {
  name: "desk filing cabinet",
  drawers: 3,
  color: "white",
  dimensions: {
    height: 24,
    width: 26,
    depth: 30,
  },
  drawerOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

console.log("The filing cabinet is this tall:", cabinet.dimensions.height);
console.log("The filing cabinet drawer is open:", cabinet.drawerOpen);
