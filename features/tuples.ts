const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi = ["brown", true, 40];
pepsi[0] = 40;
pepsi[2] = "brown";

//turning this array in tuples

const pepsiTuple: [string, boolean, number] = ["brown", true, 40];
pepsiTuple[0] = 40;
pepsiTuple[2] = "brown";

//turning this array in tuples using type alias
type Drink = [string, boolean, number];

const pepsiTupleType: Drink = ["brown", true, 40];
pepsiTuple[0] = 40;
pepsiTuple[2] = "brown";
