"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
// const ans = swap([12, 23]);
const ans = swap(["virat", "dhoni"]);
console.log(ans);
// ******************
function swap1(fisrt, second) {
    return [second, fisrt];
}
// const ans = swap([12, 23]);
const ans1 = swap1(12, 23);
console.log(ans1);
const swap2 = (fisrt, second) => {
    return [second, fisrt];
};
const ans2 = swap1("pandaya", "gill");
console.log(ans2);
