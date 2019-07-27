interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(
//     `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`
//   );
// };

//using interface

const printVehicleInter = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

// printVehicle(oldCivic);
printVehicleInter(oldCivic);
