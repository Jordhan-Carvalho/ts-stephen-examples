@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Something bad!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
// We could update the decorator like so:

// function logError(errorMessage: string) {
//   return function(
//     target: any,
//     key: string,
//     descriptor: PropertyDescriptor
//   ): void {
//     const method = descriptor.value;
//     descriptor.value = function(...args: any[]) { /* UPDATED */
//       try {
//         method.apply(this, args); /* UPDATED */
//       } catch (e) {
//         console.log(`${e}: ${errorMessage}`);
//       }
//     };
//   };
// }
// That'll capture any argument that get passed into the method and pass them through to the decorated version
