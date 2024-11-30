const num=20;
console.log("1 "+typeof num); //NUMBER

const variable = 4* "holi";
console.log("2 "+variable); //NAN
console.log("3 "+typeof variable); //NUMBER

const division = 4/0;
console.log("4 "+ division); //INFINITY
console.log("5 "+typeof division); //NUMBER

const numberstring = "30";
const string = "20 años";
console.log("6 "+isNaN(variable)); //PREGUNTA SI NO ES UN NÚMERO, NO SI SÍ LO ES- TRUE
console.log("7 "+isNaN(division)); //FALSE
console.log("8 "+isNaN("12"));//FALSE
console.log("9 "+isNaN(12));//FALSE
console.log("10 "+isNaN(numberstring));//FALSE
console.log("11 "+isNaN(string));//TRUE
console.log("12 "+isNaN(NaN));//TRUE

const number = 100.3454;
console.log("13 "+number); //100.3454
console.log("14 "+number.toString()); //100.3454
console.log("15 "+typeof number); //NUMBER
console.log("16 "+typeof number.toString()); //STRING

console.log("17 "+number.toFixed);









