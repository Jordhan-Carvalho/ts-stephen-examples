import { User } from "./models/User";

console.log("Hi there");

const blah = new User({ name: "Jordhan", age: 32 });

console.log(blah.get("name"));
console.log(blah.get("age"));

blah.set({ name: "joao" });

console.log(blah.get("name"));
console.log(blah.get("age"));

blah.on("porra", () => {
  console.log("porra1");
});

blah.on("porra", () => {
  console.log("porra2");
});

blah.on("click", () => {
  console.log("click");
});

blah.trigger("porra");
blah.trigger("click");
blah.trigger("saad");
