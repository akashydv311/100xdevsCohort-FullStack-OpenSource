
interface PersonInformaction {
    name: string;
    age: number;
    greet(): string;
    greetAge(): string;
}

class Person implements PersonInformaction {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hii! ${this.name}`
    }
    greetAge(): string {
        return `I am happy to know you'r age is ${this.age}`
    }
}

const personObj = new Person("Akash Yadav", 23);

console.log(personObj.greet());
console.log(personObj.greetAge());

