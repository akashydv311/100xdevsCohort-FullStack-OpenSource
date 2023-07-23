"use strict";
var Arithemic;
(function (Arithemic) {
    Arithemic[Arithemic["Add"] = 0] = "Add";
    Arithemic[Arithemic["Sub"] = 1] = "Sub";
    Arithemic[Arithemic["Div"] = 2] = "Div";
    Arithemic[Arithemic["Mul"] = 3] = "Mul";
})(Arithemic || (Arithemic = {}));
function calculate(a, b, type) {
    console.log(type);
    return 1;
}
const ans = calculate(1, 2, Arithemic.Div);
console.log(ans);
