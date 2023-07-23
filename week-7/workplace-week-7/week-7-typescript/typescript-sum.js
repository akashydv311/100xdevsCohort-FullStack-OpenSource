var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hii! ".concat(this.name);
    };
    Person.prototype.greetAge = function () {
        return "I am happy to know you'r age is ".concat(this.age);
    };
    return Person;
}());
var personObj = new Person("Akash Yadav", 23);
console.log(personObj.greet);
console.log(personObj.greetAge);
