const profile = {
  name: "Jordhan",
  age: 27,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// using destructuring still have to use annotations the same way as it wasnt destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
