const carMarkers = ["ford", "pegeout", "ferrari"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatible values
carMarkers.push(100);

// Help with high order fucntions
carMarkers.map(car => {
  return car;
});

//Flexible types
const importantDates = [new Date(), "30/01"];
importantDates.push("haha");
importantDates.push(new Date());
importantDates.push(10);
