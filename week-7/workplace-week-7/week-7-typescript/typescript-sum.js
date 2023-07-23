"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hii! ${this.name}`;
    }
    greetAge() {
        return `I am happy to know you'r age is ${this.age}`;
    }
}
const personObj = new Person("Akash Yadav", 23);
console.log(personObj.greet());
console.log(personObj.greetAge());
