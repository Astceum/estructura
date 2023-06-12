function sentenceIf(anioActual, anioPersona) {

    // guasdo en una variable el resultado ded la resta

    const resultado = anioActual - anioPersona;

    //verificar mediante un if si la persona es mayor de edad
    if (resultado < 18) {
        console.log("la persona es menor de edad, cochino deprabado");
    } else if (resultado >=18 && resultado <30 ) {
        console.log("esta papo ugu")
    } else if(resultado >= 30)
        console.log("esta si es legal y esta viejo, tiene ", resultado, "años");


}



sentenceIf(2023,2011);
