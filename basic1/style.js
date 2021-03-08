
var max=25;
var min=-5;

var temp =parseInt(Math.random()*(max-min+1)+min);
// var temp = parseInt(Math.random()*26 - Math.random()*6);


console.log(temp);

if (temp>=-5 && temp<=10){
    var temp_content=  document.getElementsByClassName("temp")[0];
   temp_content.style.color="white";
    temp_content.style.fontSize="24px";
    temp_content.style.textAlign="center";

    temp_content.style.backgroundColor="blue";
  temp_content.innerHTML=`The weather is cold ${temp}`;
}
else{
    var temp_content=  document.getElementsByClassName("temp")[0];
    temp_content.style.color="white";
    temp_content.style.fontSize="24px";
    temp_content.style.backgroundColor="green";
    temp_content.style.textAlign="center";


    temp_content.innerHTML=`The weather is moderate ${temp}`;
}