
// var max=25;
// var min=-5;

// var temp =parseInt(Math.random()*(max-min+1)+min);
// // var temp = parseInt(Math.random()*26 - Math.random()*6);


// console.log(temp);

// if (temp>=-5 && temp<=10){
//     var temp_content=  document.getElementsByClassName("temp")[0];
//    temp_content.style.color="white";
//     temp_content.style.fontSize="24px";
//     temp_content.style.textAlign="center";

//     temp_content.style.backgroundColor="blue";
//   temp_content.innerHTML=`The weather is cold ${temp}`;
// }
// else{
//     var temp_content=  document.getElementsByClassName("temp")[0];
//     temp_content.style.color="white";
//     temp_content.style.fontSize="24px";
//     temp_content.style.backgroundColor="green";
//     temp_content.style.textAlign="center";

//     temp_content.innerHTML=`The weather is moderate ${temp}`;
// }
// _________________________________________________________________________________
var max=40;
var min=-5;

var temp =parseInt(Math.random()*(max-min+1)+min);
// var temp = parseInt(Math.random()*26 - Math.random()*6);


console.log(temp);
var pic = document.createElement("IMG");


if (temp>=-5 && temp<=10){
    var temp_content=  document.getElementsByClassName("temp")[0];
   temp_content.style.color="white";
    temp_content.style.fontSize="24px";
    temp_content.style.textAlign="center";
    temp_content.style.backgroundColor="blue";
  temp_content.innerHTML=`The weather is cold ${temp}`;

pic.setAttribute("src","/img/cold.jpg");
pic.setAttribute("width","304");
pic.setAttribute("height","228");
pic.setAttribute("alt","the weather is so cold");
document.getElementById("temp").appendChild(pic);




}
else if (temp>10 && temp<=25){
    var temp_content=  document.getElementsByClassName("temp")[0];
    temp_content.style.color="white";
    temp_content.style.fontSize="24px";
    temp_content.style.backgroundColor="green";
    temp_content.style.textAlign="center";

    temp_content.innerHTML=`The weather is moderate ${temp}`;


    pic.setAttribute("src","/img/Moderateweather.jpg");
    pic.setAttribute("width","304");
    pic.setAttribute("height","228");
   
    pic.setAttribute("alt","the weather is so morderate");
    document.getElementById("temp").appendChild(pic);
    



}
else {
  var temp_content=  document.getElementsByClassName("temp")[0];
    temp_content.style.color="white";
    temp_content.style.fontSize="24px";
    temp_content.style.backgroundColor="red";
    temp_content.style.textAlign="center";
  
    
    
    temp_content.innerHTML=`The weather is hot ${temp}`;
    
    pic.setAttribute("src","/img/hot.png");
    pic.setAttribute("width","304");
    pic.setAttribute("height","228");
    pic.setAttribute("alt","the weather is so hot");
    document.getElementById("temp").appendChild(pic);

}