///////////
let dinero = 5000;
let i = 0;
let apuestaNumero, apuesta, saldo;

do{
    

    apuestaNumero = prompt("¿A qué número quieres apostar?");
    apuesta = parseInt(prompt("¿Cuánto dinero quieres apostar?"));
    
    saldo = dinero - apuesta;

    console.log(`Tu saldo es: $${saldo}`);
    document.write(`Tu saldo es: $${saldo}<br>`);
    
    let random = 5;
    //Math.floor(Math.random() * 10+1); //// * 11
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    //   }
    
    //   console.log(getRandomInt(3));
    //   // Expected output: 0, 1 or 2
    
    //   console.log(getRandomInt(1));
    //   // Expected output: 0
    
    //   console.log(Math.random());
    //   // Expected output: a number from 0 to <1

    if(apuestaNumero == random){

        saldo = dinero + (apuesta*3);

        console.log(`Tu saldo es: $${saldo}`);
        document.write(`Tu saldo es: $${saldo}<br>`);

    }else{

        console.log(`Perdiste. Tu saldo es: $${saldo}`);
        document.write(`Perdiste. Tu saldo es: $${saldo}<br>`);
    }
    
    if (saldo >= 10000){

        console.log(`¡GANASTE! Tu saldo es: $${saldo}`);
        document.write(`¡GANASTE! Tu saldo es: $${saldo}<br>`);

    }
    
    console.log(random);
    console.log(apuestaNumero);


    i++;

}while(saldo>0 && saldo<10000);    

    




