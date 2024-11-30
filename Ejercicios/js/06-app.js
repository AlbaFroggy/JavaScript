//Implementa la siguiente formula dale valores a las variables
// x=y^2+y/2

var y= 3;
var x=(Math.pow(y,2)+y/2);
console.log(x);

//Implementa la siguiente fórmula y dale valores a las variables y redondea el total hacia abajo
// Total=total+total*15%

total=5;
Total=total+total*0,15;
console.log(Math.floor(Total));

//Implementa la siguiente fórmula y dale valores a las variables y redondea el total hacia arriba
// Tasa = sqrt(x^2+total*7%)

var Tasa = Math.sqrt((Math.pow(x,2)+total+0.07));
console.log(Math.ceil(Tasa));

//Implementa la siguiente fórmula
// Masacorporal=peso/(estatura)^2
var peso=73;
var estatura=1.60;
var Masacorporal= peso/(Math.pow(estatura,2));
console.log(Masacorporal);