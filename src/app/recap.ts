const usernmae: string = 'Cesar';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const cesar = new Person(15, 'Molina');
cesar.age;
