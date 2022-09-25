
const fruits = new Map([
['apple', 500],
['banana', 700],
['mango', 800],
]);
//list
let stringvalue = "";
for(const x of fruits.entries()){

    stringvalue +=x;
}
console.log(stringvalue);


