const input1 = { a: 1, b: 2, c: 3 };
const output1 = Object.entries(input1).map(([key, value]) => ({ [key]: value }));
console.log(output1);
// [ { a: 1 }, { b: 2 }, { c: 3 } ]

const input2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output2= input2.reduce((acc, curr) => ({ ...acc, ...curr }), {});
console.log(output2);
// Output: { a: 1, b: 2, c: 3 }



const readline = require('readline');
function handshakes(n){
    return n*(n-1)/2;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NumCases;
let CaseIndex = 0;

rl.question('Enter the number of test cases: ', (answer) =>{
    NumCases = parseInt(answer);
    rl.prompt();
});

rl.on('line', (line) =>{
    if(CaseIndex<NumCases){
        const n = parseInt(line);
        console.log(handshakes(n));
        CaseIndex++;
    }
    if(CaseIndex === NumCases){
        rl.close();
    } else{
        rl.prompt();
    }
});
