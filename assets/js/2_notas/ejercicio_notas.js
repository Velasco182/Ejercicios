let nombres = [];
let notas = [];
let finales = [];

let nota0, nota1, nota2;
let nota11, nota22, nota33, finall;
let final0, final1, final2;

document.querySelector('.notas').innerHTML = `NOTAS FINALES ADSO <br>
                                                    IV TRIMESTRE<br>`;

for (let index = 0; index < 3; index++) {
    alert("NOTAS DE ADSO");
    nombres[index] = prompt('¿Cuál es el nombre del ' + (parseInt(index) + 1) +' aprendiz? :');

    for (let i = 0; i< 3; i++) {
        
        let nota = prompt('Ingrese nota ' + (parseInt(i) + 1) + ' :');
        eval(" nota" + i + " =" + nota);
        notas[i] = nota;


        if(i===0){
        nota11 = (notas[0] * 0.2);
        }
        if(i===1){
        nota22 = (notas[1] * 0.2);
        }
        if(i===2){
        nota33 = (notas[2] * 0.6);
        }
        
        finall = (nota11 + nota22 + nota33);
        eval(" final" + i + " =" + finall);
        finales[i] = finall;
    }

} 
for (let index = 0; index < 1; index++) {
    
    document.write(`Aprendiz: `,`${nombres[0]}<br>`);
    console.log(`Aprendiz: `,`${nombres[0]}\n`);
    document.write(`Nota 1: `,`${notas[0]}<br>`);
    console.log(`Nota 1: `,`${notas[0]}\n`);
    document.write(`Nota 2: `,`${notas[1]}<br>`);
    console.log(`Nota 2: `,`${notas[1]}\n`);
    document.write(`Nota 3: `,`${notas[2]}<br>`);
    console.log(`Nota 3: `,`${notas[2]}\n`);
    document.write(`                           Nota Final:  ${finales[0]}<br>`);
    console.log(`Nota Final:  ${finales[0]}\n`);
}
for (let index = 0; index < 1; index++) {
    
    document.write(`<br>Aprendiz: `,`${nombres[1]}<br>`);
    console.log(`Aprendiz: `,`${nombres[1]}\n`);
    document.write(`Nota 1: `,`${notas[0]}<br>`);
    console.log(`Nota 1: `,`${notas[0]}\n`);
    document.write(`Nota 2: `,`${notas[1]}<br>`);
    console.log(`Nota 2: `,`${notas[1]}\n`);
    document.write(`Nota 3: `,`${notas[2]}<br>`);
    console.log(`Nota 3: `,`${notas[2]}\n`);
    document.write(`                           Nota Final:  ${finales[1]}<br>`);
    console.log(`Nota Final:  ${finales[1]}\n`);
}    
for (let index = 0; index < 1; index++) {
    
    document.write(`<br>Aprendiz: `,`${nombres[2]}<br>`);
    console.log(`Aprendiz: `,`${nombres[2]}\n`);
    document.write(`Nota 1: `,`${notas[0]}<br>`);
    console.log(`Nota 1: `,`${notas[0]}\n`);
    document.write(`Nota 2: `,`${notas[1]}<br>`);
    console.log(`Nota 2: `,`${notas[1]}\n`);
    document.write(`Nota 3: `,`${notas[2]}<br>`);
    console.log(`Nota 3: `,`${notas[2]}\n`);
    document.write(`                           Nota Final:  ${finales[2]}`);
    console.log(`Nota Final:  ${finales[2]}`);
 
} 



// document.querySelector('.notas').innerHTML = `NOTAS FINALES ADSO <br>
//                                                     IV TRIMESTRE<br>---------<br>Nombre:`+" "+`${nombre}<br>`;
// console.log("NOTAS FINALES ADSO\n IV TRIMESTRE\n ---- \nNombre: ");

// let precio = [];
// let tprecio, descuento, iva, total;
// let precios0, precios1, precios2, precios3;

// for (let index = 0; index < 3; index++) {

//     productos[index] = prompt('Ingrese producto ' + (parseInt(index) + 1) +':');
    
//     let precios = prompt('Ingrese precio de producto ' + (parseInt(index) + 1) +':');
    
//     eval(" precios" + index + " =" + precios);
//     precio[index] = precios;

//     tprecio = (precios0 + precios1 + precios2 + precios3);

//     descuento = (tprecio * 0.10);
//     iva = (tprecio * 0.19);

//     total = (tprecio - descuento + iva);

// }      
//     for (let index = 0; index < 1; index++) {
        
//         document.write(`Producto:  ${productos[0]} Precio Unitario:  ${precio[0]}<br>`);
//     }
//     for (let index = 0; index < 1; index++) {
        
//         document.write(`Producto:  ${productos[1]} Precio Unitario: ${precio[1]}<br>`);
//     }    
//     for (let index = 0; index < 1; index++) {
        
//         document.write(`Producto:  ${productos[2]} Precio Unitario:  ${precio[2]}<br>`);
//     }
//     for (let index = 0; index < 1; index++) {
        
//         document.write(`Producto:  ${productos[3]} Precio Unitario:  ${precio[3]}<br>-----------<br>`);
//         document.write(`                           Subtotal:  ${tprecio}<br>`);
//         document.write(`                           IVA 19%:  ${iva}<br>`);
//         document.write(`                           Descuento 10%:  ${descuento}<br>-----------<br>`);
//         document.write(`                           Total a Pagar:  ${total}`);

//         // console.log("Factura N° 0001\n ---- \nNombre: ",nombre);
//         console.log("Producto: ", productos[0], " Precio: ",precio[0]);
//         console.log("Producto: ", productos[1], " Precio: ",precio[1]);
//         console.log("Producto: ", productos[2], " Precio: ",precio[2]);
//         console.log("Producto: ", productos[3], " Precio: ",precio[3]);
//         console.log("----");
//         console.log("Subtotal: ",tprecio);
//         console.log("IVA 19%: ",iva);
//         console.log("Descuento 10%: ",descuento);
//         console.log("----");
//         console.log("Total a Pagar: ",total);

        
//     } 
