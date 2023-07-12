
const arr = [
    {
        name: "Akash",
        age: 65
    },
    {
        name: "Himanshu",
        age: 23
    },
    {
        name: "Arvind",
        age: 87
    },
    {
        name: "Akash",
        age: 12
    },
]

const newArr = arr.map((value) => {
    if (value.age > 25) {
        return {
            name: value.name,
            age: value.age,
            isAllowed: false
        }
    } else {
        return {
            name: value.name,
            age: value.age,
            isAllowed: true
        }
    }
})

console.log(newArr);