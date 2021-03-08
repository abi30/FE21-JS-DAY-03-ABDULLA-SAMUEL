var array = [1,7,-3,9];
var max =array[0];//30;array[3]
for (let i=1; i<array.length; i++){
    if (array[i] > max){
          max=array[i];
        }
    
   
}
const biggest_number=document.getElementsByClassName("demo")[0];

biggest_number.style.fontSize="24px";
biggest_number.style.textAlign="center";
biggest_number.style.backgroundColor="yellow";

biggest_number.innerHTML=`the highest value is ${max}`;

// console.log(max);








//get min/max value of arrays
// function getArrayMax(array){
//     return Math.max.apply(null, array);
//  }
//  function getArrayMin(array){
//     return Math.min.apply(null, array);
//  }
//  var ages=[1, 7, -3, 9];
//  var maxAge=getArrayMax(ages); //92
//  var minAge=getArrayMin(ages); //11

//  console.log(maxAge)