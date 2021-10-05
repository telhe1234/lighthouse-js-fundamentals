// This function should create a new object with a 
// property called speed, and another property called time 
// and add it to the cars array.

const carPassing = function(cars, speed){
  cars.push({
    time: Date.now(),
    speed: speed
  });
  return cars;
};

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

console.log(carPassing(cars, speed));