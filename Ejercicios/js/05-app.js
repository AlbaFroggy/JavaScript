console.log(Boolean(1));
            console.log(Boolean('Whatever')); //true
            console.log(Boolean(3.14)); //true
            console.log(Boolean(100 > 5)); //true
            console.log(Boolean(1 < 100)); //true
            console.log(Boolean('1' == 1)); //true



            console.log(Boolean(0)); //true
            console.log(Boolean(-0)); //false
            console.log(Boolean('')); //false
            console.log(Boolean(NaN)); //false
            console.log(Boolean(null)); //false
            console.log(Boolean(undefined)); //false
            console.log(Boolean('1'===1)); //false



            console.log(Boolean(NaN)); //false
            console.log(Boolean("cadena")); //true