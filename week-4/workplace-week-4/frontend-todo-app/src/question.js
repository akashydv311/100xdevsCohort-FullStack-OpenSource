
const arr = [23, 34, 45, 7];
let newarr = [];

// using map
newarr = arr.map((value) => {
    return value * 2;
})
console.log("arr", newarr);

// noraml logic
for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i] * 2);
}
// console.log(newarr);
for (let i = 0; i < newarr.length; i++) {
    newarr[i] = newarr[i] * 2;
}
// console.log(newarr);

// const ans = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//     }
//     return arr;
// }

// console.log(ans[1]);