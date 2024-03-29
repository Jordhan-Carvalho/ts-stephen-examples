interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  // a way to tey JS we want a objc and have no idea what the keys will be
  // this.events["afsdfdsf"]
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    //takes the scond obj copy all the props and overwrite the ones who already exists
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
