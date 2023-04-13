/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const can = {
  material: "aluminum",
  color: "red and pink",
  volume: "12oz",
  fluid: {
    flavor: "watermelon",
    sparkling: true,
  },
};

console.log("color of can", can.color);
console.log("is fluid sparkling", can.fluid.sparkling);
console.log("how much liquid", can["volume"]);
