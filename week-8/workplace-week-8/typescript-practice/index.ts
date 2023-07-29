

type Input = (number | string)[];

function getFirstElement(arr: Input): (string | number) {
    return arr[0];
}

const ans1 = getFirstElement([12, 23, 34, 21]);
const ans2 = getFirstElement(["akash", "himanshu", "virat"]);
const ans3 = getFirstElement(["virat", 789, 876]);

console.log(ans1, ans2, ans3);


// ******************************


function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const ans11 = getFirstElement([12, 23, 34, 21]);
const ans12 = getFirstElement(["akash", "himanshu", "virat"]);
const ans13 = getFirstElement(["virat", 789, 876]);

console.log(ans1, ans2, ans3);
