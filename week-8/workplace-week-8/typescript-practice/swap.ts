
function swap<T>(arr: T[]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp
    return arr;
}

// const ans = swap([12, 23]);
const ans = swap(["virat", "dhoni"]);
console.log(ans);

// ******************


function swap1<T>(fisrt: T, second: T): [T, T] {
    return [second, fisrt];
}

// const ans = swap([12, 23]);
const ans1 = swap1(12, 23);
console.log(ans1);


const swap2 = <T>(fisrt: T, second: T): [T, T] => {
    return [second, fisrt];
}

const ans2 = swap1("pandaya", "gill");
console.log(ans2);

export { }
