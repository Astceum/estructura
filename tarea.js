// recibir un valor

// compara ese valor con 7 y 8 verificando si es divisible entre ellos

//valor divisible entre 7
//valor divisible entre 8

//console.log ("verdadero")
//console.log ("falso")

function sentenceIf(valor){
    const resultado1 = valor % 7 && valor % 8
    
    if (resultado1 == 0){
        console.log("verdadero")
    } else  {
        console.log("falso")
    }


}

sentenceIf(73)