console.log("This is tutorial 49");
let name = "lakshay";
console.log(name + " is the GOAT");

// We can use functions in javascript
// If we write something in the function name like here pritting(name,gretting="hello") here it will take hello as a default value is nothing is passed 
function printting(name,greeting){
    console.log(name+" is very pretty");
    console.log("May "+name+greeting);

}


// We can make a function with some return type by just writing return at the end of the function
function returnwala(a,c,b){
    return a+b+c;
}

let naam = "Lakshay";
let mom = "rahul";
let greet = " day be the best day";
printting(mom,greet);
printting(naam,greet);

console.log(returnwala(3,21,1));
