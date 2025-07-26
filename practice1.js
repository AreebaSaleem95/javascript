/*let score=prompt("Enter your marks");
let grade;
if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){ 
    grade="B";

}else if(score>=60 && score<=69){ 
    grade="C";

}else if(score>=50 && score<=59){ 
    grade="D";

}else if(score>=0 && score<=49){ 
    grade="F";

}
console.log("according to your score ,your grade was:",grade);*/

//template literal in in js
/*let specialstring=`this is a template string`;
console.log(typeof specialstring);*/
/*let str="apnacollege";
str.toUpperCase();*/

//practice questions
/*let fullName=prompt("enter your full name without spaces");
let username="@"+fullName+fullName.length;
console.log(username);*/
//arrays
// |let marks=[97,98,76,65,56];
/*
console.log(marks)
console.log(marks_length)*/
// arrays for loop
/* let heros=[ "quaid_e_azam","areeba","shaktiman","mother"];
for ( let i=0; i < heros.length ; i++){
    console.log(heros[i]);
}*/

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log('avg arks of the class=${avg}');