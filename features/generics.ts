class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);
//type inference
const arr = new ArrayOfAnything(["a", "b", "c"]);

/* ### GENERICS WITH FUNCTIONS ### */

function printStrings(arr: string[]): void {
  for (let eachArr of arr) {
    console.log(eachArr);
  }
}

function printNumbers(arr: number[]): void {
  for (let eachArr of arr) {
    console.log(eachArr);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let eachArr of arr) {
    console.log(eachArr);
  }
}

printAnything<string>(["sad", "asdad"]);
//type inference
printAnything(["sad", "asdad"]);
printAnything(["asd", 123, false]);

/* ### GENEREC CONSTRAINTS ## */

class Car {
  print() {
    console.log("im a car");
  }
}

class House {
  print() {
    console.log("im a House");
  }
}

interface Printable {
  print(): void;
}

// with extends we say thata whatever the type we pass will have the .print, will have to satify the interface
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let eachArr of arr) {
    eachArr.print();
  }
}

printHousesOrCars([1, 2]);
printHousesOrCars<Car>([new House(), new Car()]);
printHousesOrCars([new House(), new Car()]);
