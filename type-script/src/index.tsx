import * as _ from 'lodash';

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
  	return _.join(["Hello,", ' ', this.greeting], '');
  }
}

let greeter = new Greeter("world");

alert(greeter.greet());