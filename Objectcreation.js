// what are the possible ways to create an object in javascript
// Object Literal
var obj = { key1: value1, key2: value2 };

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = new Person("John", 25);

// Object.create()
const obj = Object.create(null);
obj.key = value;

// ES6 Classes
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 20); 

// Factory Functions
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

const person = createPerson("John", 25);

// Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello!");
};

const person = new Person("John", 25);
person.sayHello();

// Object.assign()
const obj1 = { key1: value1 };
const obj2 = { key2: value2 };

const mergedObj = Object.assign({}, obj1, obj2);

// Singleton Object
const singleton = {
  property1: value1,
  property2: value2,
  method: function() {
    // code here
  }
};

// Prototype Chain
const parent = {
  property: value,
  method: function() {
    // code here
  }
};

const child = Object.create(parent);
child.property = value; // additional properties or overrides
