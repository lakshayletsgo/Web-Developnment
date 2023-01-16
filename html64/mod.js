console.log("This is mod");
function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum = sum+element;        
    });
    return sum/arr.length;
}
module.exports ={
    avg:avg,
    name:"Lakshay",
    Age:'19',
} 