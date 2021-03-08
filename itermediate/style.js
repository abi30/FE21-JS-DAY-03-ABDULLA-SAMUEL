

// exercise 1

// var avg_mark=[76,85,65,93,81];

// var avg_mark=prompt("please enter your Avage_mark: ")

// if (avg_mark<60){

//  var avg=document.getElementsByClassName("demo")[0];
//  avg.style.color="white";
//  avg.style.fontSize="24px";
//  avg.style.backgroundColor="red";
//  avg.style.textAlign="center";
//  avg.innerHTML=`your grade is  F and average mark ${avg_mark}`;


// }
// else if (avg_mark<70){
 
//   var avg=document.getElementsByClassName("demo")[0];
//   avg.style.color="white";
//   avg.style.fontSize="24px";
//   avg.style.backgroundColor="green";
//   avg.style.textAlign="center";
//   avg.innerHTML=`your grade is  D and average mark ${avg_mark}`;



// }
// else if (avg_mark<80){


//  var avg=document.getElementsByClassName("demo")[0];
//  avg.style.color="white";
//  avg.style.fontSize="24px";
//  avg.style.backgroundColor="green";
//  avg.style.textAlign="center";
//  avg.innerHTML=`your grade is  C and average mark ${avg_mark}`;
  
// }

// else if (avg_mark<90){

//   var avg=document.getElementsByClassName("demo")[0];
//  avg.style.color="white";
//  avg.style.fontSize="24px";
//  avg.style.backgroundColor="green";
//  avg.style.textAlign="center";
//  avg.innerHTML=`your grade is  B and average mark ${avg_mark}`;

  
// }
// else if (avg_mark<100){

 


//  var avg=document.getElementsByClassName("demo")[0];
//  avg.style.color="white";
//  avg.style.fontSize="24px";
//  avg.style.backgroundColor="green";
//  avg.style.textAlign="center";
//  avg.innerHTML=`your grade is  A and avg_mark ${avg_mark}`;

  
// }
// else{
//  var avg=document.getElementsByClassName("demo")[0];
//  avg.style.color="black";
//  avg.style.fontSize="24px";
//  avg.style.backgroundColor="yellow";
//  avg.style.textAlign="center";
//  avg.innerHTML=`this mark doesn't exist !!`;

// }














// exercise 2

// var mas="";

// for (let i =1;i<101;i++){

// var newP = document.createElement("P");

// mas = i;
// newP.innerText="hel";
// document.getElementsByClassName("FuzzBu[0]zz").appendChild(newP);

// if ((i%5===0)&&(i%3===0)){
//   mas ="FizzBuzz";
// document.getElementsByClassName("FuzzBu[0]zz").innerHTML="mas";

// }
// else if (i%3===0){
//   mas="Fizz";
// document.getElementsByClassName("FuzzBu[0]zz").innerHTML=mas;

// }
// else if (i%5===0){
//   mas="Buzz";
// document.getElementsByClassName("FuzzBu[0]zz").innerHTML=mas;

// }

// console.log(mas);

// }


// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// exercise 3

var x,y,chr;
// var para="";
var para = document.createElement("P");

for(x=1; x <=7; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");    
    // document.write(chr);
     document.getElementsByClassName("temp")[0].appendChild(para).innerHTML="f";

//  document.getElementsByClassName("demo")[0].innerHTML=chr;

      }

      // console.log(chr);
      // document.getElementsByClassName("demo")[0].innerHTML=chr;

 chr='';    
}