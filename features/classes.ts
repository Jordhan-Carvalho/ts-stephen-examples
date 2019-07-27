// public (used only in the class)
//protected used in the class and child
//public anywhere

class Vehicle {
  constructor(public color: string) {
    // this.color = color; removed due to the public method
  }
  // color: string;

  protected driver(): void {
    console.log("chugga chugga");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private honk(): void {
    console.log("beeep beeeeep");
  }

  startBeepingProcess(): void {
    this.honk();
    this.driver();
  }
}

const fox = new Car(4, "red");
// fox.driver();
console.log(fox.color);
fox.startBeepingProcess();
