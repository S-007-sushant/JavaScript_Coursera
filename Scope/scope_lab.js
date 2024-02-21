// Global Socpe

var globalVar = "I'm a global variable";
let globalLet = "I'm a global, but scoped with let";
const globalConst = "I'm a global constent";

{
// Block Scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block scoped const";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block
//console.log(blockVar);
//console.log(blockLet);
console.log(blockConst);

// Socpe of variables for funciton scope

function show(){
    var functionVar = "I'm a blockscoped var";
    let functionLet = "I'm block-scoped let";
    const functionConst = "I'm a block-socped const";
}
show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
