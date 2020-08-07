 const numbers = [3,5,7,4,3];
 //This is for Map
const output = [];
for ( let i = 0; i < numbers.length; i++){
    const element = numbers[i]
    const result = element * element;
    output.push(result);
}
function square (element){
    return element * element;
}
const square = element => element * element;
const square = x => x*x;




numbers.map(function(element, index,array){
    console.log( element,index,array);
})

const result = numbers.map(function(element){
    return element * element;
})
const result = numbers.map(x => x*x);
console.log( result);

 //this is for Filter
const bigger = numbers.filter( x => x> 5);
    
const isThere = numbers.find(x => x > 5);    
console.log(isThere);