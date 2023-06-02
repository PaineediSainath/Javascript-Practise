// // Getter method
// const obj = {
//   get propertyName() {
//     // Custom logic to retrieve the value of 'propertyName'
//     // Return the value
//     return this._propertyName;
//   },
// };
// // Setter method
// const obj2 = {
//   set propertyName(value) {
//     // Custom logic to set the value of 'propertyName'
//     // Store the value
//     this._propertyName = value;
//   },
// };
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  set first(value) {
    this.firstName = value.toUpperCase();
  }
  set last(value) {
    this.lastName = value.toUpperCase();
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

let user1 = new User("spongebob", "squarepants");
let user2 = new User("patrick", "star");

console.log(user1.fullName);
console.log(user2.fullName);
