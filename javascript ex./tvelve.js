let str1 = prompt("enter a string");
let str2 = prompt("enter second string");

let pos = +prompt("enter the index where you wants to add string 2 in string 1");

let finalstr = str1.substring(0,pos) + str2 + str1.substring(pos,str1.length);

alert(finalstr);