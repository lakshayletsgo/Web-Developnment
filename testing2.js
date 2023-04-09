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
