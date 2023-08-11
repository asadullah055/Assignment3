// ===========Problem 01=============
// ========1) javascript For in loop =====
function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let property in obj) {
      console.log(`${property}: ${obj[property]}`);
    }
  }
}

const obj = {
  first_name: "Asadullah",
  last_name: "Ahmed",
};
printObjectProperties(obj);

// ===========Problem 02=============
// ===== 2) javascript function returns======
function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  } else {
    return Math.max(...numbers);
  }
}
const numbers1 = [10, 20, 5, 30, 25]; // 30
console.log(findMaxNumber(numbers1));
const numbers2 = [5, 15, 7]; // 15
console.log(findMaxNumber(numbers2));

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // null

// ==================== Problem 03 ======
// ==== 3) javascript Spread Operator ===
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

// ==================== Problem 04 ======
// 4) javascript arrow function
const calculateSquare = (n) => {
  return n * n;
};
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64

// ==================== Problem 05 ======
// 5) javascript es6 map
function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));

// ==================== Problem 06 ======
// 6) javascript es6 static keyword

class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}
console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16

// ==================== Problem 07 ======
// 7) javascript es6 class inheritance

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  fetch() {
    console.log("Fetching the ball!");
  }
}
const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"

// ==================== Problem 08 ======
// 8) javascript es6 super keyword
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`
    );
  }
}
const person1 = new Person("John", 30);

person1.introduce();

const student1 = new Student("Alice", 20, "Computer Science");

student1.introduce();
