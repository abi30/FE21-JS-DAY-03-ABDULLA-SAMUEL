var array = [20,7,20,59];
var max = array[0];
for (let i=1; i<array.length; i++){
    if (array[i] > max)
    max=array[i];
    else { 
        max=array[i];
    }
}
console.log(max);