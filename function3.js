/*const E = function (M, C) {
    return this.E = M * Math.pow(C, 2)
}
console.log(E(62, 4))*/
//Arrow function
const X = (y, z) => this.X = y * Math.pow(z, 2);
console.log(X(4, 5))