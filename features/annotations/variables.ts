// Try to use inference unless the 3 reasons bellow

let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function variable
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};
// Same thing
const logNumber2 = (i: number): void => {
  console.log(i);
};

/* ### ALL THE ABOVE CAN BE TYPE INFERENCE ###*/

/* When to use annotations? */
// 1) Func that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // w/o annotation its any
console.log(coordinates);

//  2) Declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; // Would be better if just use let foundWord = false

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
