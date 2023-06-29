alert("Bienvendido a Ping - Pong.");
let x,i=0; 

do{

    alert("Ingresa un número entero y par.");
    x = prompt("Ingresa el número");
    i++;    

}while(x/x!==0 && x%2!==0);
// Valida el cociente para que no sea decimal o flotante // Valida el residuo para que solo ingresen pares


//////////////////////////HECHO CON CICLOS FOR//////////////////////////
//isFinite(x) ? 'Float': x = prompt("Ingresa un Límite valido");

//parseInt(x);

// for(let j=1;j<=x;j++){
// console.log(`${[j]}`);
// document.write(`${[j]}<br>`);

//     if(j%5 === 0 && j%3 === 0){
//         console.log(`${[j]} Ping Pong`);
//         document.write(`${[j]} Ping Pong<br>`);
//     }else if(j%5 === 0){
//         console.log(`${[j]} Pong`);
//         document.write(`${[j]} Pong<br>`);
//     }else if(j%3 === 0){
//         console.log(`${[j]} Ping`);
//         document.write(`${[j]} Ping<br>`);
//     }
// }
/////////////////////////////////////////////////////////////////////////
////////////////////////////CICLO DO WHILE//////////////////////////////
let j=1;
do{
    console.log(`${j}`);
    document.write(`${j}<br>`);
    
    if(j%5 === 0 && j%3 === 0){
        console.log(`${j} Ping Pong`);
        document.write(`${j} Ping Pong<br>`);
        }else if(j%5 === 0){
            console.log(`${j} Pong`);
            document.write(`${j} Pong<br>`);
            }else if(j%3 === 0){
                console.log(`${j} Ping`);
                document.write(`${j} Ping<br>`);
            }
    j++;
}while(j<=x);
    



