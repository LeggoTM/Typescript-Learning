// Global Scope
const globalVariable = 10;

function sampleFn() {
    console.log(globalVariable);
}

sampleFn();

// Local Scope
function localVarFn() {
    const localVar = 20;
    console.log(localVar);
    console.log(globalVariable);
}

// Block Scoped
if (true) {
    // Block scope starts
    const blockScopeVar = 30;
    console.log(blockScopeVar);
    // Block scope ends
}




